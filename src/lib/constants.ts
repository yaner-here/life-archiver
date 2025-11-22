export type EventItem = {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};

export const events: EventItem[] = [
	{image: "/images/event1.png", title: "Event 1", slug: "event-1", location: "America, CA", date: "2025-11-22", time: "20:17 UTC+8"},
	{image: "/images/event2.png", title: "Event 2", slug: "event-2", location: "America, CA", date: "2025-11-22", time: "20:17 UTC+8"},
	{image: "/images/event3.png", title: "Event 3", slug: "event-3", location: "America, CA", date: "2025-11-22", time: "20:17 UTC+8"},
	{image: "/images/event4.png", title: "Event 4", slug: "event-4", location: "America, CA", date: "2025-11-22", time: "20:17 UTC+8"},
	{image: "/images/event5.png", title: "Event 5", slug: "event-5", location: "America, CA", date: "2025-11-22", time: "20:17 UTC+8"},
	{image: "/images/event6.png", title: "Event 6", slug: "event-6", location: "America, CA", date: "2025-11-22", time: "20:17 UTC+8"},
];