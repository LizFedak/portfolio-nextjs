const reviews = [
    {
        name: "Adam Wills",
        company: "Hite Digital",
        review: "Liz is simply amazing! I consider Liz an integral part of my own team even though she doesn't actually work for me. She is invaluable to my business, always has my back when I need help with custom dev work related to Duda, and is very timely and efficient. I can't imagine not having her available to me and can't speak highly enough.",
        rating: "5",
        location: "US",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    },
    {
        name: "Lesli Lindgren",
        company: "Keep Simple Solutions",
        review: "For top-notch custom widget development on the Duda platform, Liz is the best developer to turn to. Her expertise sets her apart from the rest, and she can create custom widgets that go beyond the ordinary. With Liz, your web project will reach new heights and exceed your expectations. Additionally, Liz is a pleasure to work with and genuinely cares about her clients' success.",
        rating: "5",
        location: "US",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    },
    {
        name: "Sarah Carnes",
        company: "Lift Division",
        review: "Our client needed a very specific widget that was reliable, easy to update and integrated within Duda. Liz was able to create the widget, customize it and gave us access to everything we needed to complete our website design project. She is super knowledgeable, friendly and wonderful to work with!",
        rating: "5",
        location: "US",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    },
    {
        name: "Aj Pfeil",
        company: "Cre8 My Site",
        review: "An extremely talented and professional developer. Can absolutely handle any and all your custom development needs.",
        rating: "5",
        location: "US",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    },
    {
        name: "Ted Edwards",
        company: "",
        review: "What amazing attention to detail and service Liz provided. Purchased a Duda widget and am amazed by the quality in it's build. Will be back for more that's for sure",
        rating: "5",
        location: "Australia",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    },
    {
        name: "Justin Shipley",
        company: "",
        review: "Liz does great work and goes the extra mile in service!  She is an excellent coder and patient with dummies like me! 🤣.I highly recommend her!",
        rating: "5",
        location: "US",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    },
    
    {
        name: "Bianca Messina",
        company: "",
        review: "Liz puts her all into everything she does! I've been blessed to know her throughout her entire coding journey and  her work keeps getting better and better! She is extremely creative, prompt, intuitive, and provides outstanding customer service. I look forward to working with her again! 10/10 Recommend!",
        rating: "5",
        location: "US",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    },
    
    {
        name: "Toffer Lorenzana",
        company: "On Duty Media",
        review: "Widget Pro is hands-down the best Duda widget developer. Liz can integrated multiple third-party platforms with Duda that allowed us to automate complex daily tasks. Great work and reliable support!",
        rating: "5",
        location: "Philippines",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    },
    {
        name: "Bill Sholar",
        company: "Short Story Marketing",
        review: "We had a need for a particularly complicated widget, and Liz nailed it!",
        rating: "5",
        location: "US",
        link: "https://www.google.com/search?q=google+reviews+widget+pro+boulder&oq=google+reviews+widget+pro+boulder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzg0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89a37c60d09bfaa9:0x512af2022e5b698b,1,,,,"
    }
]



export default reviews;