# Supabase Keep-Active Mechanism

## Problem
Supabase Free Tier projects are paused after 7 days of inactivity. This prevents users from interacting with the database (e.g., submitting the email capture form) if the site hasn't been visited recently.

## Solution
We implemented a **Cron Job** using Vercel Cron that pings the database every 2 days. This ensures the project remains active.

## Implementation Details

### 1. API Route
**File**: `src/app/api/cron/keep-alive/route.ts`

- A `GET` endpoint protected by Vercel Cron logic (public but intended for system use).
- **Logic**: Connects to Supabase using `SUPABASE_SECRET_KEY` (service role) to bypass Row Level Security (RLS).
- **Query**: Fetches a single row from the `leads` table (`select id from leads limit 1`). This counts as database activity.

### 2. Cron Schedule
**File**: `vercel.json`

- Configures Vercel to invoke the API route automatically.
- **Schedule**: `0 10 */2 * *` (Every 2 days at 10:00 AM UTC).

## Environment Variables
Required in **Vercel Project Settings**:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL |
| `SUPABASE_SECRET_KEY` | **Critical**. The `service_role` key from Supabase > Project Settings > API. This allows the cron job to bypass RLS. |

> [!NOTE]
> `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` is not used by this specific cron job logic (since we use the secret key for admin access), but is required for the frontend.

## Verification
To verify the mechanism is working:
1. Go to **Vercel Dashboard** > **Settings** > **Crons**.
2. You should see the `My Cron Job` (or valid path).
3. Click "Run" to manually trigger it.
4. Check the "Logs" tab for a `200 OK` response: `{"message": "Keep alive ping successful"}`.
