import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-ata">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI & Feedback</h2>
                    <p className="text-lg">
                        Practice on real interview questions and get instant feedback on your performance. Our
                        AI-powered platform
                    </p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start an Interview</Link>
                    </Button>
                </div>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard key={interview.id} {...interview}/>
                    ))}

                    {/*<p>You haven&apos;t taken any interviews yet.</p>*/}
                </div>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard key={interview.id} {...interview}/>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Page
