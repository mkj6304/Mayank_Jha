import React, { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const formRef = useRef(null);
  const captchaRef = useRef(null);

  const [captchaToken, setCaptchaToken] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = formRef.current;

    // Browser-level validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // CAPTCHA validation
    if (!captchaToken) {
      setStatus("Please complete the security verification.");
      setStatusType("error");
      return;
    }

    // Honeypot check
    const honeypot = form.elements["botcheck"]?.value;

    if (honeypot) {
      // Silently ignore obvious bot submissions
      return;
    }

    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const formData = new FormData(form);

      // Web3Forms access key.
      // This is intentionally public according to Web3Forms.
      formData.append(
        "access_key",
        "51c104f8-a7ea-4363-a8d9-c5263e1a447d"
      );

      // CAPTCHA token
      formData.append("h-captcha-response", captchaToken);

      // Email subject shown in your inbox
      formData.append(
        "subject",
        `Portfolio Contact: ${formData.get("subject")}`
      );

      // Name displayed with the notification
      formData.append(
        "from_name",
        "Mayank Jha Portfolio"
      );

      // Visitor's email becomes Reply-To
      formData.append(
        "replyto",
        formData.get("email")
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus(
          "Message sent successfully! I'll get back to you soon."
        );
        setStatusType("success");

        form.reset();
        setCaptchaToken("");

        captchaRef.current?.reset();

      } else {
        throw new Error(
          result.message || "Unable to send message."
        );
      }

    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        "Something went wrong while sending your message. Please try again or email me directly."
      );
      setStatusType("error");

      captchaRef.current?.reset();
      setCaptchaToken("");

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6"
    >
      <div
        className="max-w-6xl mx-auto"
        data-aos="fade-up"
      >

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
            Let's <span className="text-white">Connect</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind, want to collaborate, or think
            my skills could be a good fit for an opportunity?
            I'd love to hear from you.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div
            className="bg-gray-800 rounded-2xl p-8 shadow-lg
                       border border-gray-700"
          >

            <h3 className="text-2xl font-semibold text-yellow-200 mb-4">
              Let's work together
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              I'm open to meaningful projects, freelance
              opportunities, software development work, research
              collaborations, and interesting ideas where I can
              contribute with my experience in full-stack
              development, AI, machine learning, and data systems.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 mb-5">

              <div
                className="w-11 h-11 rounded-xl
                           bg-yellow-300/10
                           border border-yellow-300/20
                           flex items-center justify-center"
              >
                <span className="text-xl">📧</span>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Email
                </p>

                <a
                  href="mailto:mayankjha632004@gmail.com"
                  className="text-gray-200 hover:text-yellow-300 transition"
                >
                  mayankjha632004@gmail.com
                </a>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-8">

              <div
                className="w-11 h-11 rounded-xl
                           bg-yellow-300/10
                           border border-yellow-300/20
                           flex items-center justify-center"
              >
                <span className="text-xl">📞</span>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Phone
                </p>

                <a
                  href="tel:+919399091115"
                  className="text-gray-200 hover:text-yellow-300 transition"
                >
                  +91 93990 91115
                </a>
              </div>

            </div>

            {/* Socials */}
            <div>

              <p className="text-sm text-gray-400 mb-3">
                Find me online
              </p>

              <div className="flex gap-4 text-yellow-300 text-2xl">

                <a
                  href="https://github.com/mkj6304"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-white transition"
                >
                  <i className="fab fa-github" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mayank-jha-361573298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white transition"
                >
                  <i className="fab fa-linkedin" />
                </a>

                <a
                  href="https://instagram.com/mayank_jha04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white transition"
                >
                  <i className="fab fa-instagram" />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE — FORM */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg
                       border border-gray-700"
          >

            <h3 className="text-2xl font-semibold text-yellow-200 mb-6">
              Send me a message
            </h3>

            {/* Honeypot */}
            <input
              type="text"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  placeholder="John Doe"
                  className="w-full bg-gray-900
                             border border-gray-700
                             rounded-lg px-4 py-3
                             text-white
                             placeholder-gray-600
                             focus:outline-none
                             focus:border-yellow-300
                             transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={150}
                  placeholder="john@example.com"
                  className="w-full bg-gray-900
                             border border-gray-700
                             rounded-lg px-4 py-3
                             text-white
                             placeholder-gray-600
                             focus:outline-none
                             focus:border-yellow-300
                             transition"
                />
              </div>

            </div>

            {/* Contact Reason */}
            <div className="mb-5">

              <label
                htmlFor="reason"
                className="block text-sm text-gray-300 mb-2"
              >
                I'm contacting you about
              </label>

              <select
                id="reason"
                name="reason"
                required
                defaultValue=""
                className="w-full bg-gray-900
                           border border-gray-700
                           rounded-lg px-4 py-3
                           text-white
                           focus:outline-none
                           focus:border-yellow-300
                           transition"
              >
                <option value="" disabled>
                  Select an option
                </option>

                <option value="project">
                  Hiring for a Project
                </option>

                <option value="freelance">
                  Freelance Work
                </option>

                <option value="job">
                  Job Opportunity
                </option>

                <option value="collaboration">
                  Collaboration
                </option>

                <option value="research">
                  Research Collaboration
                </option>

                <option value="other">
                  Other
                </option>
              </select>

            </div>

            {/* Subject */}
            <div className="mb-5">

              <label
                htmlFor="subject"
                className="block text-sm text-gray-300 mb-2"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                minLength={3}
                maxLength={120}
                placeholder="What would you like to discuss?"
                className="w-full bg-gray-900
                           border border-gray-700
                           rounded-lg px-4 py-3
                           text-white
                           placeholder-gray-600
                           focus:outline-none
                           focus:border-yellow-300
                           transition"
              />

            </div>

            {/* Message */}
            <div className="mb-6">

              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows="6"
                placeholder="Tell me a little about your project, opportunity, or idea..."
                className="w-full bg-gray-900
                           border border-gray-700
                           rounded-lg px-4 py-3
                           text-white
                           placeholder-gray-600
                           resize-none
                           focus:outline-none
                           focus:border-yellow-300
                           transition"
              />

            </div>

            {/* CAPTCHA */}
            <div className="mb-6">

              <HCaptcha
                ref={captchaRef}
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={handleCaptchaVerify}
                onExpire={handleCaptchaExpire}
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-3 px-6
                         rounded-lg transition-all duration-200
                         ${
                           isSubmitting
                             ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                             : "bg-yellow-300 text-gray-900 hover:bg-yellow-200 hover:shadow-lg hover:shadow-yellow-400/20"
                         }`}
            >

              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">◌</span>
                  Sending...
                </span>
              ) : (
                "Send Message ↗"
              )}

            </button>

            {/* Status Message */}
            {status && (
              <div
                className={`mt-4 p-3 rounded-lg text-sm text-center ${
                  statusType === "success"
                    ? "bg-green-400/10 text-green-300 border border-green-400/20"
                    : "bg-red-400/10 text-red-300 border border-red-400/20"
                }`}
              >
                {status}
              </div>
            )}

            <p className="text-xs text-gray-500 text-center mt-4">
              Your message will be sent securely to my email.
            </p>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;