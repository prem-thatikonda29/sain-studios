# Pricing Page Email Capture - Implementation

## Overview
The `/pricing` page is gated behind an email capture overlay. Home page pricing preview remains fully visible. Users provide their email to unlock the pricing page.

## User Flow
1. Home page → pricing preview visible (no blocking)
2. User navigates to `/pricing`
3. Pricing cards are blurred with overlay
4. User enters email → Server Action stores it in Supabase
5. Pricing revealed, FAQ always visible

## Files

### Server Action
- `src/app/actions/capture-lead.ts` - Validates email, stores in Supabase

### Components
- `src/components/pricing/PricingContent.tsx` - Pricing page with blur overlay
- `src/components/auth/EmailCaptureModal.tsx` - Email input modal
- `src/components/home/PricingPreview.tsx` - Home page pricing (no overlay)

### Supabase Clients
- `src/lib/supabase/server.ts` - Server-side client (used by Server Action)
- `src/lib/supabase/client.ts` - Browser client (not used for leads)

## Storage

### localStorage (client-side)
- `pricing_unlocked`: "true" when email submitted
- `user_email`: The captured email

### Supabase (leads table)
```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  provider TEXT DEFAULT 'pricing_capture',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS enabled - server action uses secret key to bypass
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
-- No policies needed - secret key bypasses RLS
```

## Environment Variables

`.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_publishable_key

# Server-only (bypasses RLS)
SUPABASE_SECRET_KEY=your_secret_key
```

## Marketing Copy

### Overlay
- Title: "Creator-Only Pricing"
- Description: "We don't publish our rates publicly. Drop your email to see exclusive pricing for serious creators."
- Button: "Reveal My Pricing"

### Modal
- Title: "You're Almost In"
- Description: "Enter your email to unlock exclusive creator pricing. This is where the magic happens."
- Button: "Show Me The Rates"
- Footer: "Your email stays private. Always."

## Verification

1. Run `npm run dev`
2. Home page pricing → fully visible
3. Navigate to `/pricing` → blurred with overlay
4. Enter email → pricing reveals
5. Check Supabase Table Editor → leads table
6. Reset test: `localStorage.removeItem("pricing_unlocked")`

## Security Notes

- Email capture uses Server Action (not direct client-side DB access)
- Email validation happens server-side
- **RLS enabled** on leads table - blocks public access
- **Secret key** (`SUPABASE_SECRET_KEY`) used server-side to bypass RLS
- Publishable key safe to expose (can't access leads table directly)
