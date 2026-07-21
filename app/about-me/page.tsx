import { HorizontalTimeline, HorizontalTimelineProps } from "@/components/common/HorizontalTimeline/HorizontalTimeline";

const timeline: HorizontalTimelineProps["data"] = [
    {
        year: "2015",
        title: "Junior Web Developer",
        content: "Customize a WHMCS system, maintain the company website and outsource client websites."
    },
    {
        year: "2018",
        title: "Fullstack Developer",
        content: "Develop a HRM, HIS, real-time reporting, work schedule system."
    },
    {
        year: "2020",
        title: "Fullstack Developer",
        content: "Develop an e-commerce system and integrated ERP management application, including third-party payment processing."
    },
    {
        year: "2022",
        title: "Senior Frontend Developer",
        content: "Develop a payment system and payment management system."
    },
    {
        year: "2023",
        title: "Senior Frontend Developer",
        content: "Develop management systems such as TMS, WMS, OMS, and other applications like Marketplace and marketing websites."
    },
    {
        year: "2025",
        title: "Senior Frontend Developer",
        content: "Develop finance system integrated with AI, AI-Prompting."
    },
]

export default function AboutmePage() {
    return (
        <div className="flex h-full items-center justify-center overflow-auto">
            <HorizontalTimeline data={timeline} />
        </div>
    );
}