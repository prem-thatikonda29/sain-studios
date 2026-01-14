export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is your turnaround time?",
    answer: "Our standard turnaround time for short-form content is 24-48 hours. For long-form videos, it typically takes 3-5 business days depending on complexity and length. We can also accommodate rush orders for urgent projects.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! We want you to be 100% happy with your videos. Our standard packages include revisions as specified in your plan (typically 2-4 rounds). We use Frame.io for easy, precise feedback on specific timestamps.",
  },
  {
    question: "How do I send my footage?",
    answer: "We create a shared Google Drive or Dropbox folder for your project where you can upload raw footage. For larger files, we recommend using WeTransfer or MASV. We'll set up the most convenient workflow for you during onboarding.",
  },
  {
    question: "What software do you use?",
    answer: "Our editors are professionals who work primarily in Adobe Premiere Pro and After Effects for advanced motion graphics. We also use DaVinci Resolve for color grading when needed.",
  },
];
