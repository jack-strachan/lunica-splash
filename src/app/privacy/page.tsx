import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Lunica Technologies",
  description:
    "Learn how Lunica Technologies, LLC collects, uses, and safeguards your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="w-full bg-background pt-20">
        <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-20 lg:py-32">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            Legal
          </span>

          <h1 className="text-[2.5rem] !font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-foreground/60">
            Last Updated: May 1, 2024
          </p>

          <div className="prose-policy mt-12 space-y-10 text-[0.9375rem] leading-relaxed text-foreground/80">
            {/* Intro */}
            <p>
              Lunica Technologies, LLC (the &ldquo;Company&rdquo;) is committed
              to maintaining robust privacy protections for its users. Our
              Privacy Policy (&ldquo;Privacy Policy&rdquo;) is designed to help
              you understand how we collect, use and safeguard the information
              you provide to us and to assist you in making informed decisions
              when using our Service.
            </p>

            <p>
              For purposes of this Agreement, &ldquo;Site&rdquo; refers to the
              Company&rsquo;s website, which can be accessed at{" "}
              <a
                href="https://www.lunica.com"
                className="text-foreground underline underline-offset-2 transition-colors hover:text-foreground/60"
              >
                https://www.lunica.com
              </a>{" "}
              or through our mobile application, Ranch.
              &ldquo;Service&rdquo; refers to the Company&rsquo;s services
              accessed via the Site, in which users can buy everyday essentials
              for quick delivery. The terms &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              and &ldquo;our&rdquo; refer to the Company. &ldquo;You&rdquo;
              refers to you, as a user of our Site or our Service. By accessing
              our Site or our Service, you accept our Privacy Policy and{" "}
              <a
                href="/terms"
                className="text-foreground underline underline-offset-2 transition-colors hover:text-foreground/60"
              >
                Terms of Use
              </a>
              , and you consent to our collection, storage, use and disclosure of
              your Personal Information as described in this Privacy Policy.
            </p>

            {/* 1 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                1. Information We Collect
              </h2>
              <p className="mt-4">
                To activate the Service you do not need to submit any Personal
                Information other than your email address, your name, and your
                phone number. To use the Service thereafter, you do not need to
                submit further Personal Information. However, in an effort to
                improve the quality of the Service, we track information provided
                to us by your browser or by our software application when you
                view or use the Service, such as the website you came from (known
                as the &ldquo;referring URL&rdquo;), the type of browser you use,
                the device from which you connected to the Service, the time and
                date of access, and other information that does not personally
                identify you. We track this information using cookies, or small
                text files which include an anonymous unique identifier. Cookies
                are sent to a user&rsquo;s browser from our servers and are
                stored on the user&rsquo;s computer hard drive. Sending a cookie
                to a user&rsquo;s browser enables us to collect Non-Personal
                information about that user and keep a record of the
                user&rsquo;s preferences when utilizing our services, both on an
                individual and aggregate basis. For example, the Company may use
                cookies to collect the following information:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Marketing information</li>
                <li>Information on shopping habits</li>
                <li>User authentication details</li>
              </ul>
              <p className="mt-3">
                The Company may use both persistent and session cookies;
                persistent cookies remain on your computer after you close your
                session and until you delete them, while session cookies expire
                when you close your browser.
              </p>
            </div>

            {/* 1.1 */}
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                1.1 Information collected via Technology
              </h3>
              <p className="mt-4">
                You are responsible for maintaining the confidentiality of your
                Account login information and are fully responsible for all
                activities that occur under your Account. You agree to immediately
                notify Company of any unauthorized use, or suspected unauthorized
                use of your Account or any other breach of security. Company
                cannot and will not be liable for any loss or damage arising from
                your failure to comply with the above requirements.
              </p>
            </div>

            {/* 1.2 */}
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                1.2 Information you provide us by registering for an account
              </h3>
              <p className="mt-4">
                In addition to the information provided automatically by your
                browser when you visit the Site, to become a subscriber to the
                Service you will need to create a personal profile. You can
                create a profile by registering with the Service and entering
                your email address, and creating a user name and a password. By
                registering, you are authorizing us to collect, store and use
                your email address in accordance with this Privacy Policy.
              </p>
            </div>

            {/* 1.3 */}
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                1.3 Children&rsquo;s Privacy
              </h3>
              <p className="mt-4">
                The Site and the Service are not directed to anyone under the age
                of 13. The Site does not knowingly collect or solicit information
                from anyone under the age of 13, or allow anyone under the age of
                13 to sign up for the Service. In the event that we learn that we
                have gathered personal information from anyone under the age of
                13 without the consent of a parent or guardian, we will delete
                that information as soon as possible. If you believe we have
                collected such information, please contact us at{" "}
                <a
                  href="mailto:support@lunica.com"
                  className="text-foreground underline underline-offset-2 transition-colors hover:text-foreground/60"
                >
                  support@lunica.com
                </a>
                .
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                2. How We Use and Share Information
              </h2>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                2.1 Personal Information
              </h3>
              <p className="mt-4">
                Except as otherwise stated in this Privacy Policy, we do not
                sell, trade, rent or otherwise share for marketing purposes your
                Personal Information with third parties without your consent. In
                general, the Personal Information you provide to us is used to
                help us communicate with you. For example, we use Personal
                Information to contact users in response to questions, solicit
                feedback from users, provide technical support, and inform users
                about promotional offers.
              </p>

              <h4 className="mt-6 text-base font-semibold tracking-tight text-foreground">
                2.1.1 Personal Details Shared with Vendors and Third Parties
              </h4>
              <p className="mt-4">
                We may share the following personal details with vendors and
                third parties in order to operate and improve our Service:
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Name:</strong> Shared with
                  delivery and fulfillment partners to process and deliver your
                  orders, and with payment processors to verify transactions.
                </li>
                <li>
                  <strong className="text-foreground">Email address:</strong>{" "}
                  Shared with email service providers to send transactional
                  communications (such as order confirmations and delivery
                  updates), marketing communications (with your consent), and
                  customer support correspondence.
                </li>
                <li>
                  <strong className="text-foreground">Phone number:</strong>{" "}
                  Shared with delivery partners to coordinate deliveries and with
                  SMS service providers to send order status notifications and
                  account verification messages.
                </li>
                <li>
                  <strong className="text-foreground">
                    Delivery address:
                  </strong>{" "}
                  Shared with delivery and fulfillment partners to complete your
                  orders.
                </li>
                <li>
                  <strong className="text-foreground">
                    Payment information:
                  </strong>{" "}
                  Shared with payment processors to process transactions
                  securely. We do not store full payment card details on our
                  servers.
                </li>
              </ul>
              <p className="mt-4">
                These vendors and third parties use your Personal Information
                only at our direction, for the specific purposes described above,
                and in accordance with our Privacy Policy. We require all
                third-party service providers to respect the security of your
                Personal Information and to treat it in accordance with
                applicable law.
              </p>
              <p className="mt-4">
                We may also share Personal Information with outside parties if we
                have a good-faith belief that access, use, preservation or
                disclosure of the information is reasonably necessary to meet any
                applicable legal process or enforceable governmental request; to
                enforce applicable Terms of Service, including investigation of
                potential violations; address fraud, security or technical
                concerns; or to protect against harm to the rights, property, or
                safety of our users or the public as required or permitted by
                law.
              </p>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                2.2 Non-Personal Information
              </h3>
              <p className="mt-4">
                In general, we use Non-Personal Information to help us improve
                the Service and customize the user experience. We also aggregate
                Non-Personal Information in order to track trends and analyze use
                patterns on the Site. This Privacy Policy does not limit in any
                way our use or disclosure of Non-Personal Information and we
                reserve the right to use and disclose such Non-Personal
                Information to our partners, advertisers and other third parties
                at our discretion. In the event we undergo a business transaction
                such as a merger, acquisition by another company, or sale of all
                or a portion of our assets, your Personal Information may be
                among the assets transferred. You acknowledge and consent that
                such transfers may occur and are permitted by this Privacy
                Policy, and that any acquirer of our assets may continue to
                process your Personal Information as set forth in this Privacy
                Policy. If our information practices change at any time in the
                future, we will post the policy changes to the Site so that you
                may opt out of the new information practices. We suggest that you
                check the Site periodically for any changes.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                3. How We Protect Information
              </h2>
              <p className="mt-4">
                We implement security measures designed to protect your
                information from unauthorized access. Your account is protected
                by your account password and we urge you to take steps to keep
                your personal information safe by not disclosing your password
                and by logging out of your account after each use. We further
                protect your information from potential security breaches by
                implementing certain technological security measures including
                encryption, firewalls and secure socket layer technology.
                However, these measures do not guarantee that your information
                will not be accessed, disclosed, altered or destroyed by breach
                of such firewalls and secure server software. By using our
                Service, you acknowledge that you understand and agree to assume
                these risks.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                4. Your Rights Regarding the Use of Your Personal Information
              </h2>
              <p className="mt-4">
                You have the right at any time to prevent us from contacting you
                for marketing purposes. When we send a promotional communication
                to a user, the user can opt out of further promotional
                communications by following the unsubscribe instructions provided
                in each promotional e-mail. You can also indicate that you do not
                wish to receive marketing communications from us in the{" "}
                <a
                  href="/contact"
                  className="text-foreground underline underline-offset-2 transition-colors hover:text-foreground/60"
                >
                  contact section
                </a>{" "}
                of the Site. Please note that notwithstanding the promotional
                preferences you indicate by either unsubscribing or opting out
                in the contact section of the Site, we may continue to send you
                administrative emails including, for example, periodic updates to
                our Privacy Policy.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                5. Links to Other Websites
              </h2>
              <p className="mt-4">
                As part of the Service, we may provide links to or compatibility
                with other websites or applications. However, we are not
                responsible for the privacy practices employed by those websites
                or the information or content they contain. This Privacy Policy
                applies solely to information collected by us through the Site
                and the Service. Therefore, this Privacy Policy does not apply to
                your use of a third party website accessed by selecting a link on
                our Site or via our Service. To the extent that you access or use
                the Service through or on another website or application, then
                the privacy policy of that other website or application will
                apply to your access or use of that site or application. We
                encourage our users to read the privacy statements of other
                websites before proceeding to use them.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                6. Changes to Our Privacy Policy
              </h2>
              <p className="mt-4">
                The Company reserves the right to change this policy and our
                Terms of Service at any time. We will notify you of significant
                changes to our Privacy Policy by sending a notice to the primary
                email address specified in your account or by placing a prominent
                notice on our site. Significant changes will go into effect 30
                days following such notification. Non-material changes or
                clarifications will take effect immediately. You should
                periodically check the Site and this privacy page for updates.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                7. Contact Us
              </h2>
              <p className="mt-4">
                If you have any questions regarding this Privacy Policy or the
                practices of this Site, please contact us by sending an email to{" "}
                <a
                  href="mailto:support@lunica.com"
                  className="text-foreground underline underline-offset-2 transition-colors hover:text-foreground/60"
                >
                  support@lunica.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
