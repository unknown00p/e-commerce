import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // console.log('formData', formData)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
            {/* Elegant Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h1 className="text-3xl sm:text-4xl font-light tracking-[0.2em] mb-4">CONTACT US</h1>
                <div className="w-16 sm:w-24 h-px bg-black mx-auto mb-4" />
                <p className="text-gray-600 tracking-wide text-sm sm:text-base">We'd love to hear from you</p>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
                {/* Contact Information */}
                <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-xl sm:text-2xl font-light tracking-wider mb-6 sm:mb-8">GET IN TOUCH</h2>

                    <div className="space-y-4 sm:space-y-6">
                        {/* <div className="flex items-center gap-4 sm:gap-6 group">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm tracking-wider text-gray-600 mb-1">PHONE</p>
                                <p className="font-light text-sm sm:text-base">+1 (555) 123-4567</p>
                            </div>
                        </div> */}

                        <div className="flex items-center gap-4 sm:gap-6 group">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm tracking-wider text-gray-600 mb-1">EMAIL</p>
                                <p className="font-light text-sm sm:text-base">contact@ir-panda.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 group">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm tracking-wider text-gray-600 mb-1">LOCATION</p>
                                <p className="font-light text-sm sm:text-base">123 Fashion Avenue</p>
                                <p className="font-light text-sm sm:text-base">New York, NY 10001</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white">
                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-0 py-2 sm:py-3 border-0 border-b border-[#a4a4a4] focus:ring-0 focus:border-black transition-colors duration-300 placeholder:text-gray-400 placeholder:font-light text-sm sm:text-base outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-0 py-2 sm:py-3 border-0 border-b border-[#a4a4a4] focus:ring-0 focus:border-black transition-colors duration-300 placeholder:text-gray-400 placeholder:font-light text-sm sm:text-base outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-0 py-2 sm:py-3 border-t-0 border-l-0 border-r-0 border-b border-[#a4a4a4] focus:ring-0 focus:border-black transition-colors duration-300 placeholder:text-gray-400 placeholder:font-light text-sm sm:text-base outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-0 py-2 sm:py-3 border-0 border-b border-[#a4a4a4] focus:ring-0 focus:border-black transition-colors duration-300 placeholder:text-gray-400 placeholder:font-light resize-none text-sm sm:text-base outline-none"
                                    required
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="group relative z-10 overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-black text-white hover:text-black transition-colors duration-300 w-full sm:w-auto"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 text-xs sm:text-sm tracking-widest">
                                        <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                                        SEND MESSAGE
                                    </span>
                                    <div className="absolute inset-0 bg-[#e5e8dd] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
