export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Legal</span>
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p className="page-hero-subtitle">
            Your privacy is fundamental to how MoneyFloat is built. We collect
            only what is necessary and keep everything on your device.
          </p>
        </div>
      </section>

      <div className="privacy-content">
        <span className="privacy-effective">Effective Date: April 1, 2025</span>

        <div className="privacy-highlight-box">
          <p>
            <strong>The short version:</strong> MoneyFloat stores all data locally
            on your device using SQLite. We do not operate any servers. We do not
            collect analytics. We do not share your data with anyone. Ever.
          </p>
        </div>

        <h2>1. Introduction</h2>
        <p>
          Welcome to MoneyFloat ("the App"), a mobile application designed to help
          mobile money (MoMo) agents and vendors in Ghana manage their cash and
          e-money float balances through digital reconciliation. This Privacy Policy
          explains how MoneyFloat handles your personal information.
        </p>
        <p>
          By installing and using MoneyFloat, you agree to the practices described
          in this Privacy Policy. If you do not agree, please uninstall the application.
        </p>
        <p>
          This policy applies to all users of the MoneyFloat Android application.
          It does not apply to any third-party services or applications you may access
          through links in the App.
        </p>

        <h2>2. Data We Collect</h2>
        <p>
          MoneyFloat collects and stores the following types of information solely
          within the app on your device:
        </p>
        <ul>
          <li>
            <strong>Agent names:</strong> The name or alias you assign to each agent
            profile created in the app.
          </li>
          <li>
            <strong>Agent phone numbers:</strong> Phone numbers associated with agent
            profiles (used as identifiers only).
          </li>
          <li>
            <strong>Agent PINs:</strong> Access PINs for each agent profile. These
            are stored in hashed form using a one-way cryptographic hash — the
            plain-text PIN is never stored or transmitted.
          </li>
          <li>
            <strong>Customer phone numbers:</strong> The last four digits (or partial
            numbers) entered during transaction logging, used for record-keeping only.
          </li>
          <li>
            <strong>Transaction records:</strong> Details of individual transactions
            including type (cash-in or cash-out), amount, timestamp, and associated
            agent.
          </li>
          <li>
            <strong>Session data:</strong> Opening balances, closing balances, top-up
            records, and reconciliation results for each working session.
          </li>
          <li>
            <strong>Network selection:</strong> Which mobile money network (MTN MoMo,
            Telecel Cash, or AirtelTigo Money) is associated with a session or transaction.
          </li>
        </ul>
        <p>
          We do not collect your device's IMEI, advertising ID, GPS location, contacts,
          camera data, or any other device permissions beyond local storage access.
        </p>

        <h2>3. How We Use Your Data</h2>
        <p>
          All data collected by MoneyFloat is used exclusively to provide the App's
          core functionality:
        </p>
        <ul>
          <li>Displaying your current cash and float balances.</li>
          <li>Logging and retrieving transaction history for each session.</li>
          <li>Authenticating agents using their hashed PINs.</li>
          <li>Calculating end-of-day reconciliation results.</li>
          <li>Generating PDF reports from your transaction records.</li>
          <li>Supporting multiple agent profiles on a single device.</li>
        </ul>
        <p>
          No data is used for advertising, profiling, machine learning, or any purpose
          beyond the direct operation of the App.
        </p>

        <h2>4. Data Storage & Security</h2>
        <p>
          MoneyFloat is built as an offline-first application. All data is stored
          exclusively on your device using SQLite — a local, embedded database. There
          are no MoneyFloat servers, no cloud backups, and no remote databases.
        </p>
        <p>
          Your data never leaves your device through any network transmission initiated
          by the App. The only data transfer that occurs is:
        </p>
        <ul>
          <li>
            <strong>PDF export:</strong> When you choose to share or save a PDF report,
            this happens entirely on your device using your Android OS's share sheet.
            MoneyFloat does not control or log where you choose to send the PDF.
          </li>
        </ul>
        <p>
          Security measures within the App include:
        </p>
        <ul>
          <li>PIN authentication with one-way hashing (plain-text PINs are never stored).</li>
          <li>Per-agent access control so each agent only sees their own sessions.</li>
          <li>
            Data is stored within the App's private internal storage directory, which
            is not accessible to other applications on a standard (non-rooted) Android device.
          </li>
        </ul>
        <p>
          Since data is stored locally, the security of your data also depends on
          the physical security of your device. We recommend enabling a device screen
          lock and keeping the MoneyFloat PIN confidential.
        </p>

        <h2>5. Third Parties</h2>
        <p>
          MoneyFloat does not integrate with, share data with, or transmit data to
          any third-party services. This includes:
        </p>
        <ul>
          <li>No analytics providers (e.g., Google Analytics, Firebase, Mixpanel).</li>
          <li>No advertising networks.</li>
          <li>No crash reporting services that transmit data externally.</li>
          <li>No social media integrations.</li>
          <li>No payment processors.</li>
          <li>No cloud storage providers.</li>
        </ul>
        <p>
          The App does not include any third-party SDKs that collect user data.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Because all your data is stored locally on your device, you have complete
          control over it at all times:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> You can view all your data directly within the
            App at any time — transaction history, session summaries, and agent profiles
            are all accessible from the main interface.
          </li>
          <li>
            <strong>Export:</strong> Use the PDF export feature to create a portable
            copy of your transaction records.
          </li>
          <li>
            <strong>Deletion:</strong> To permanently delete all MoneyFloat data,
            uninstall the application from your Android device. This removes the SQLite
            database and all associated files completely. Alternatively, you can delete
            individual agent profiles or sessions from within the App.
          </li>
          <li>
            <strong>Correction:</strong> You can edit agent profile information directly
            within the App settings.
          </li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          MoneyFloat is designed for use by adults operating mobile money businesses.
          The App is not directed at children under the age of 13, and we do not
          knowingly collect information from children. If you believe a child has
          installed and used MoneyFloat, please ensure the App is removed from their
          device. Any data stored would be removed upon uninstallation.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in
          the App's functionality or applicable law. When we make significant changes,
          we will update the "Effective Date" at the top of this page and — where
          possible — notify users through the App.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically. Your continued
          use of the App after any changes constitutes acceptance of the updated policy.
        </p>

        <h2>9. Contact</h2>
        <p>
          If you have any questions, concerns, or requests related to this Privacy
          Policy or the way MoneyFloat handles your data, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@moneyfloat.app">support@moneyfloat.app</a>
          </li>
          <li>
            <strong>Location:</strong> Accra, Ghana
          </li>
        </ul>
        <p>
          We aim to respond to all privacy-related inquiries within 5 business days.
        </p>
      </div>
    </>
  )
}
