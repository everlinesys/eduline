export default function DemoVideo() {
    return (
        <section className="py-32 bg-white">

            <div className="max-w-5xl mx-auto px-6">

                {/* Premium Frame */}
                <div className="relative rounded-3xl overflow-hidden border border-emerald-100 shadow-2xl">

                    {/* Emerald Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-200/40 to-emerald-100/20 blur-2xl opacity-70"></div>

                    {/* Video */}
                    <div className="relative aspect-video bg-black">
                        <iframe
                            src="https://iframe.mediadelivery.net/play/594138/f2063ed6-271b-4210-bfbf-e4510382acf2"
                            loading="lazy"
                            className=" min-w-screen min-h-screen border-0"

                        ></iframe>
                    </div>

                </div>

            </div>

        </section>
    );
}
