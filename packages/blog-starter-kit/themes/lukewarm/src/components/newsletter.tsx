"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";
import { useMutation } from "@tanstack/react-query";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { ClientError } from "graphql-request";
import { BsEnvelopePaperHeartFill } from "react-icons/bs";
import { subscribeToNewsletter } from "@/lib/requests";
import { cabin, fira_sans } from "@/app/font";
type NewsletterProps = {
    className?: string;
};
export default function Newsletter({ className }: NewsletterProps) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");

    const { mutateAsync, isPending, error } = useMutation({
        mutationKey: ["newsletter"],
        mutationFn: subscribeToNewsletter,
        onError: onError,
        onSuccess: onSuccess,
    });

    function onSuccess() {
        localStorage.setItem("newsletter", email);
        toast.success(
            "Subscribed to newsletter! Check your email to confirm your subscription."
        );
        setOpen(false);
    }

    function onError(err: ClientError) {
        if (!err.response.errors) return toast.error("Something went wrong!");
        toast.error(err.response.errors[0]!.message);
    }


    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="default" className={`py-10 px-4 my-2 text-white text-3xl hover:bg-[#ff5833] border border-card ${className}`}><BsEnvelopePaperHeartFill /> <span className={`${cabin.className} pl-5`}>Newsletter</span> </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <h1 className="text-2xl font-bold">Join the newsletter!</h1>
                </DialogHeader>
                <p>
                    Be the first to know when new posts go live - subscribe to receive updates directly in your email
                </p>
                <div className="flex flex-col gap-5 mt-3">
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button onClick={() => mutateAsync(email)} disabled={isPending}>
                        {isPending ? "Loading..." : "Subscribe"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}