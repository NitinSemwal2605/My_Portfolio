import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles
import './contact.css'; // Custom styles for the contact section

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Admin email parameters (your email)
        const adminParams = {
            name: form.current.name.value,
            email: form.current.email.value,
            project: form.current.project.value,
        };

        // User confirmation email parameters
        const userParams = {
            name: form.current.name.value,
            email: form.current.email.value,
        };

        // Sending email to admin (you)
        emailjs
            .sendForm('service_cv50c3d', 'template_ebjdelb', form.current, 'GAehD-Q0GufBmdjwy')
            .then(
                () => {
                    toast.success('Message Sent Successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send message. Please try again!');
                }
            );

        // Sending confirmation email to the user
        emailjs
            .send('service_cv50c3d', 'template_psl50bu', userParams, 'GAehD-Q0GufBmdjwy')
            .then(
                () => {
                    console.log('User confirmation email sent successfully');
                },
                (error) => {
                    console.error('Error sending user confirmation email', error.text);
                }
            );
    };

    return (
        <>
            <section className="contact section" id="contact">
                <h2 className="section_title text-center ">Get In Touch</h2>
                <span className="section_subtitle text-center text-gray-600">Contact Me</span>

                <div className="contact_container container grid gap-8">
                    {/* Left side - Contact Info */}
                    <div className="contact_info bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
                        <h3 className="contact_title text-xl font-semibold text-gray-800 ">Talk to me</h3>
                        <div className="flex items-center space-x-3">
                            <i className="bx bx-envelope text-4xl text-black"></i>
                            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                        </div>
                        <span className="text-sm text-gray-600">55semwalnitin@gmail.com</span>
                        <a
                            href="mailto:55semwalnitin@gmail.com"
                            className=" inline-flex items-center hover:text-primary-dark transition-all duration-300"
                        >
                            Write me
                            <i className="bx bx-right-arrow-alt ml-2"></i>
                        </a>
                    </div>

                    {/* Right side - Contact Form */}
                    <div className="contact_form_container bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
                        <h3 className="contact_title text-xl font-semibold text-gray-800 mb-4">Write me your Project</h3>

                        <form className="contact_form" ref={form} onSubmit={sendEmail}>
                            <div className="contact_form-div mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    className="contact_form-input w-full p-3 border rounded-md focus:outline-none "
                                    placeholder="Insert Your Name"
                                    required
                                />
                            </div>

                            <div className="contact_form-div mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    className="contact_form-input w-full p-3 border rounded-md focus:outline-none "
                                    placeholder="Insert Your Email"
                                    required
                                />
                            </div>

                            <div className="contact_form-div mb-6">
                                <textarea
                                    name="project"
                                    cols="30"
                                    rows="10"
                                    className="contact_form-input w-full p-3 border rounded-md focus:outline-none "
                                    placeholder="Write your project"
                                    required
                                ></textarea>
                            </div>

                            <button
                                className="button button--flex w-full p-3 text-center  text-white rounded-md hover:bg-primary-dark transition-all duration-300 "
                                type="submit"
                            >
                                Send Message
                                <svg
                                    className="button__icon ml-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6752C11.7799 17.5352 11.0999 18.2952 10.2399 18.2952C10.0699 18.2952 9.90988 18.2652 9.75988 18.2052L9.56988 18.1352L7.16988 17.0752L5.14988 16.4952L4.68988 14.9752L6.21988 14.2152L8.43988 13.3652L9.56988 13.6652C10.1499 13.8652 10.6699 13.7852 10.8399 13.2152L12.6499 9.07525L13.8499 8.21525L13.0999 6.87525L14.1699 6.27525C14.5299 6.05525 14.9499 6.07525 15.1599 6.27525C15.5099 6.63525 15.3899 7.17525 15.0499 7.41525L7.63988 7.33525Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default Contact;
