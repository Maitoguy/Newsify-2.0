import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Main Navigation Container */}
            <nav className="h-12 flex items-center mx-10 border-b-2 relative">

                {/* Logo and Hamburger Container */}
                <div className="flex items-center justify-between w-full lg:w-auto">
                    {/* Website Logo */}
                    <h1 className="text-3xl font-bold text-red-500 hover:underline hover:decoration-blue-300 font-heading">
                        Newsify
                    </h1>

                    {/* Hamburger Menu Icon (Mobile Only) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 ml-4 space-y-1.5 group"
                    >
                        {/* Animated Hamburger Bars */}
                        <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* Desktop Navigation Items (Hidden on Mobile) */}
                <div className="hidden lg:flex gap-3 ml-4 font-body font-bold">
                    {/* News Categories */}
                    {['India', 'Business', 'Entertainment', 'Science', 'Sports', 'Technology'].map((category) => (
                        <div key={category} className="custom-underline">
                            {category}
                        </div>
                    ))}
                </div>

                {/* Desktop Action Buttons (Hidden on Mobile) */}
                <div className="hidden lg:flex absolute right-1 gap-4 font-body font-bold">
                    {/* Interactive Buttons */}
                    <div className="hover:border-b-3 hover:border-red-500 hover:cursor-pointer">
                        Subscribe
                    </div>
                    <div className="hover:border-b-3 hover:border-[#FFD700] hover:cursor-pointer">
                        Newsletter
                    </div>
                    <div className="hover:border-b-3 hover:border-blue-300 hover:cursor-pointer">
                        Sign In
                    </div>
                </div>

                {/* Mobile Menu Overlay (Conditional Rendering) */}
                {isMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-50 bg-white top-12">
                        {/* Mobile Menu Content Container */}
                        <div className="px-10 py-6 border-t">

                            {/* Mobile News Categories */}
                            <div className="flex flex-col gap-4 font-body font-bold">
                                {['India', 'Business', 'Entertainment', 'Science', 'Sports', 'Technology'].map((category) => (
                                    <div key={category} className="custom-underline">
                                        {category}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Action Buttons */}
                            <div className="flex flex-col gap-4 mt-6 font-body font-bold">
                                <div className="hover:border-b-3 hover:border-red-500">
                                    Subscribe
                                </div>
                                <div className="hover:border-b-3 hover:border-[#FFD700]">
                                    Newsletter
                                </div>
                                <div className="hover:border-b-3 hover:border-blue-300">
                                    Sign In
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </nav>
        </>
    )
}