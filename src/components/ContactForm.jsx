// ContactForm.jsx (Client component)
'use client';

import { useState } from "react";
import { ChevronDown } from 'lucide-react';
import Toast from "./Toast";

export default function ContactForm({ data, buttonText }) {
     // Form data 
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        program: "",
        message: ""
    });

    const [toastMessage, setToastMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        const hasEmptyField = Object.values(form).some((value) => value.trim() === "");

        if(hasEmptyField) {
            setToastMessage(data.error || "Please fill in all fields");
            return;
        }

        setToastMessage(data.success || "Message sent successfully");

    }
    
    return (
        <>
            {toastMessage && (
                <Toast 
                    message={toastMessage} 
                    onClose={() => setToastMessage(null)} 
                />
            )}

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >
                {/* Name */}
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
                {/* Mail */}
                <div className="contact-form__input">
                    <h4>{data.mail}</h4>
                    <input
                        type="text"
                        name="email"
                        placeholder={data.mail_holder}
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Number */}
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
                {/* Program */}
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
                        <option value="inter">{data.program1}</option>
                        <option value="national">{data.program2}</option>
                        <option value="host">{data.program3}</option>
                        <option value="project">{data.program4}</option>
                        </select>
                        <ChevronDown className="select-icon" />
                    </div>
                </div>
            
                {/* Message */}
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
            
                {/* Button */}
                <button
                    className="contact-form__button"
                    type="submit"
                >
                    {buttonText}
                </button>
            </form>
        </>
    );
}