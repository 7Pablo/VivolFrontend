'use client';

import { useState } from "react";
import { ChevronDown } from 'lucide-react';
import Toast from "./Toast";
import emailjs from '@emailjs/browser';

export default function ContactForm({ data, buttonText, trans }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        program: "",
        message: ""
    });

    const [toastMessage, setToastMessage] = useState(null);
    const [consent, setConsent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hasEmptyField = Object.values(form).some((value) => value.trim() === "");

        if (hasEmptyField) {
            setToastMessage(data.error || "Please fill in all the fields");
            return;
        }

        if (!consent) {
            setToastMessage(data.consent || "You must accept the use of your data to submit the form");
            return;
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT,
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setToastMessage(data.success || "Message sent successfully");
            setForm({ name: "", email: "", number: "", program: "", message: "" });
            setConsent(false);

        } catch (error) {
            console.error("Error:", error);
            setToastMessage(data.try || "There was an error sending the claim. Please try again.");
        }
    };

    return (
        <>
            {toastMessage && (
                <Toast 
                    message={toastMessage} 
                    onClose={() => setToastMessage(null)} 
                />
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__input">
                    <h4>{data.name}</h4>
                    <input
                        type="text"
                        name="name"
                        placeholder={data.name_holder}
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact-form__input">
                    <h4>{data.mail}</h4>
                    <input
                        type="email"
                        name="email"
                        placeholder={data.mail_holder}
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact-form__input">
                    <h4>{data.number}</h4>
                    <input
                        type="tel"
                        name="number"
                        placeholder={data.number_holder}
                        value={form.number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact-form__input">
                    <h4>{data.program}</h4>
                    <div className="contact-form__input--wrapper">
                        <select
                            name="program"
                            value={form.program}
                            onChange={handleChange}
                            required
                        >
                            <option value="">{data.program_holder}</option>
                            <option value={data.program1}>{data.program1}</option>
                            <option value={data.program2}>{data.program2}</option>
                            <option value={data.program3}>{data.program3}</option>
                            <option value={data.program4}>{data.program4}</option>
                        </select>
                        <ChevronDown className="select-icon" />
                    </div>
                </div>

                <div className="contact-form__input">
                    <h4>{data.message}</h4>
                    <textarea
                        name="message"
                        placeholder={data.message_holder}
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Consent */}
                <div className="contact-form__consent">
                  <label>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={() => setConsent(!consent)}
                      required
                    />
                    {data.consent_message}
                  </label>
                </div>

                <button className="contact-form__button" type="submit">
                    {buttonText}
                </button>
            </form>
        </>
    );
}
