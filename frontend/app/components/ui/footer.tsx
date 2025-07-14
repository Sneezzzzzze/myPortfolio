import { Github, Linkedin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-cream py-8 text-center text-gray-600">
            <div className="relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Social Icons */}
                    <div className="flex justify-center items-center space-x-6 mb-8">
                        {/* X/Twitter Icon */}
                        <a
                            href="#"
                            className="group w-10 h-10 bg-cream-dark rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
                        >
                            <svg className="w-5 h-5 text-gray-700 transition-transform duration-200 ease-in-out group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>

                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/Sneezzzzzze"
                            className="group w-10 h-10 bg-cream-dark rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
                        >
                            <Github className="w-5 h-5 text-gray-700 transition-transform duration-200 ease-in-out group-hover:scale-125" />
                        </a>

                        {/* Discord Icon */}
                        <a
                            href="#"
                            className="group w-10 h-10 bg-cream-dark rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
                        >
                            <Phone className="w-5 h-5 text-gray-700 transition-transform duration-200 ease-in-out group-hover:scale-125" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-9xl font-bold text-cream-dark select-none transform translate-y-9">
                        Junbeom
                    </h2>
                </div>
            </div>
        </footer>
    );
}
