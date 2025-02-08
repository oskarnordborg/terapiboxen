import React, { useState } from "react";
import "./ContactUsForm.css";

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name) newErrors.name = "Namn krävs.";
    if (!formData.email) {
      newErrors.email = "E-post krävs.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-post är ogiltig.";
    }
    if (!formData.message) newErrors.message = "Meddelande krävs.";
    setErrors(newErrors);
    return Object.values(newErrors).every((x) => x === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Hantera formulärinlämning (t.ex. skicka data till en server)
      console.log("Formulär skickat:", formData);
      // Återställ formulärdata
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    }
  };

  return (
    <form className={"form"} onSubmit={handleSubmit}>
      <div className={"formGroup"}>
        <label htmlFor="name">Namn</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <div className={"errorMessage"}>{errors.name}</div>}
      </div>

      <div className={"formGroup"}>
        <label htmlFor="email">E-post</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <div className={"errorMessage"}>{errors.email}</div>}
      </div>

      <div className={"formGroup"}>
        <label htmlFor="message">Meddelande</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "error" : ""}
        />
        {errors.message && (
          <div className={"errorMessage"}>{errors.message}</div>
        )}
      </div>

      <button type="submit" className={"submit-button"}>
        Skicka meddelande
      </button>
    </form>
  );
};

export default ContactUsForm;
