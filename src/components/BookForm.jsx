// BookForm.jsx (Client component)
'use client';

import Toast from "./Toast";
import { useState } from "react";
import { ChevronDown } from 'lucide-react';

export default function BookForm({data, buttonText}) {
    // Form data 
    const [form, setForm] = useState({
        age: "",
        docType: "",
        docNum: "",
        name: "",
        lastName: "",
        represent: "",
        mail: "",
        tel: "",
        cel: "",
        address: "",
        department: "",
        province: "",
        district: "",
        reason: "",
        detail: ""
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
        console.log(form);
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
                className="book-form"
                onSubmit={handleSubmit}
            >   
                <h2>{data.title}</h2>

                {/* Personal Data */}
                <div className="book-form__personal">
                    <h3>{data.personal_data}</h3>

                    <div className="book-form__content">
                        {/* Age */}
                        <div className="book-form__radio">
                            <h4>{data.age}</h4>
                            <div className="book-form__radio--buttons">
                                <div className="book-form__radio--option">
                                    <input
                                        type="radio"
                                        name="age"
                                        value={data.yes}
                                        checked={form.age === data.yes}
                                        onChange={handleChange}
                                        required
                                    />
                                    <h5>{data.yes}</h5>
                                </div>
                                <div className="book-form__radio--option">
                                    <input
                                        type="radio"
                                        name="age"
                                        value={data.no}
                                        checked={form.age === data.no}
                                        onChange={handleChange}
                                        required
                                    />
                                    <h5>{data.no}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="book-form__personal--middle">
                            {/* Document Type */}
                            <div className="book-form__input">
                                <h4>{data.doc_type}</h4>
                                <div className="book-form__input--wrapper">
                                    <select
                                        name="docType"
                                        value={form.docType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">{data.doc_type}</option>
                                        <option value={data.option1}>{data.option1}</option>
                                        <option value={data.option2}>{data.option2}</option>
                                        <option value={data.option3}>{data.option3}</option>
                                        <option value={data.option4}>{data.option4}</option>
                                        <option value={data.option5}>{data.option5}</option>
                                    </select>
                                    <ChevronDown className="select-icon" />
                                </div>
                            </div>
                            {/* Document number */}
                            <div className="book-form__input">
                                <h4>{data.doc_num}</h4>
                                <input
                                    type="text"
                                    name="docNum"
                                    placeholder={data.doc_num_holder}
                                    value={form.docNum}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="book-form__personal--bottom">
                            {/* Name */}
                            <div className="book-form__input">
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
                            {/* Last name */}
                            <div className="book-form__input">
                                <h4>{data.last_name}</h4>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder={data.last_name_holder}
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        {/* Represent */}
                        <div className="book-form__radio">
                            <h4>{data.represent}</h4>
                            <div className="book-form__radio--buttons">
                                <div className="book-form__radio--option">
                                    <input
                                        type="radio"
                                        name="represent"
                                        value={data.yes}
                                        checked={form.represent === data.yes}
                                        onChange={handleChange}
                                        required
                                    />
                                    <h5>{data.yes}</h5>
                                </div>
                                <div className="book-form__radio--option">
                                    <input
                                        type="radio"
                                        name="represent"
                                        value={data.no}
                                        checked={form.represent === data.no}
                                        onChange={handleChange}
                                        required
                                    />
                                    <h5>{data.no}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Data */}
                <div className="book-form__contact">
                    <h3>{data.personal_data}</h3>
                    
                    <div className="book-form__content">
                        <div className="book-form__contact--top">
                            {/* E-mail */}
                            <div className="book-form__input">
                                <h4>{data.mail}</h4>
                                <input
                                    type="text"
                                    name="mail"
                                    placeholder={data.mail_holder}
                                    value={form.mail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Telephone */}
                            <div className="book-form__input">
                                <h4>{data.tel}</h4>
                                <input
                                    type="text"
                                    name="tel"
                                    placeholder={data.tel_holder}
                                    value={form.tel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Celphone */}
                            <div className="book-form__input">
                                <h4>{data.cel}</h4>
                                <input
                                    type="text"
                                    name="cel"
                                    placeholder={data.cel_holder}
                                    value={form.cel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        {/* Address */}
                        <div className="book-form__input">
                            <h4>{data.address}</h4>
                            <input
                                type="text"
                                name="address"
                                placeholder={data.address_holder}
                                value={form.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="book-form__contact--bottom">
                            {/* Department */}
                            <div className="book-form__input">
                                <h4>{data.department}</h4>
                                <input
                                    type="text"
                                    name="department"
                                    placeholder={data.department_holder}
                                    value={form.department}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Province */}
                            <div className="book-form__input">
                                <h4>{data.province}</h4>
                                <input
                                    type="text"
                                    name="province"
                                    placeholder={data.province_holder}
                                    value={form.province}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* District */}
                            <div className="book-form__input">
                                <h4>{data.district}</h4>
                                <input
                                    type="text"
                                    name="district"
                                    placeholder={data.district_holder}
                                    value={form.district}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Complaint Data */}
                <div className="book-form__complaint">
                    <h3>{data.complaint_data}</h3>

                    <div className="book-form__content">
                        {/* Reason */}
                        <div className="book-form__input">
                            <h4>{data.reason}</h4>
                            <input
                                type="text"
                                name="reason"
                                placeholder={data.reason_holder}
                                value={form.reason}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Detail */}
                        <div className="book-form__input">
                            <h4>{data.detail}</h4>
                            <textarea
                                name="detail"
                                placeholder={data.detail_holder}
                                value={form.detail}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Button */}
                        <button
                            className="book-form__button"
                            type="submit"
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
