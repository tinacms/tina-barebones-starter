---
title: Choice of Software Policies and Guidelines
---

# Choice of Software Policies and Guidelines

This policy establishes a framework for selecting software solutions, prioritizing openness, autonomy, cost-efficiency, and operational simplicity. It evaluates free-tier cloud providers (GCP, Azure, Cloudflare, AWS, Oracle Cloud, and IBM Cloud) and analyzes self-hosting trade-offs, balancing technical control, financial sustainability, and workload management.

## **Core Principles for Software Selection**

> **Open Source Security Considerations**Ken Thompson's seminal lecture "Reflections on Trusting Trust" highlights fundamental security considerations when adopting open-source software:
> Trust must extend beyond source code visibility - compromised compilers can introduce vulnerabilities even in verified source code
> Regular code auditing is essential but insufficient alone - the entire toolchain requires verification
> Reproducible builds help verify binary artifacts match source code
> Multiple independent implementations of critical components reduce single points of failureThese principles inform our approach to open source adoption:
> Verify cryptographic signatures of all downloaded artifacts
> Use deterministic build processes to ensure reproducibility
> Maintain multiple trusted compiler toolchains
> Participate in security audits of critical dependencies

| **Principle**                 | **Key Components**                                                                                 | **Benefits**                                                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Open Source Software Priority | - Code transparency  <br>- Community development  <br>- Cost efficiency  <br>- Vendor independence | - Code auditability  <br>- Active community participation  <br>- Elimination of licensing fees  <br>- Freedom from proprietary lock-in |
| Data Sovereignty              | - Self-hosting priority  <br>- Data portability  <br>- Third-party minimization                    | - Strict data control  <br>- Open formats and standards  <br>- Reduced external dependencies                                           |
| Resource Optimization         | - Free-tier utilization  <br>- Cost-benefit analysis  <br>- Operational efficiency                 | - Cloud provider free tiers  <br>- Rigorous evaluation  <br>- Minimal management overhead                                              |
| Operational Management        | - Resource monitoring  <br>- Cost tracking  <br>- Security auditing  <br>- Performance metrics     | - Automated tracking  <br>- Infrastructure expense analysis  <br>- Regular security assessments  <br>- System performance monitoring   |
| Implementation Oversight      | - Service availability  <br>- Scalability needs  <br>- Compliance requirements                     | - Impact analysis  <br>- Growth projections  <br>- Regulatory considerations                                                           |

## **Evaluation of Free-Tier Cloud Providers**

The following table summarizes the free-tier offerings of several major cloud providers.  Careful consideration of project needs and potential scaling is crucial. Exceeding free-tier limits can lead to significant costs. It's vital to understand the limitations of each provider's free tier to avoid unexpected charges.  Always refer to the provider's official documentation for the most up-to-date information.

| Provider              | Key Free Tier Features                                                                                                                          | Strengths                                                               | Weaknesses                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Google Cloud Platform | $300 credit for 90 days; free tier with usage limits on Compute Engine, Cloud Storage, BigQuery, and more.                                      | Generous free tier, extensive services, strong developer tools.         | Free tier limits can be reached quickly for demanding applications.                                 |
| Microsoft Azure       | 12 months of free access to popular services; perpetual access to free-tier resources (limited storage and compute).                            | Good integration with Microsoft ecosystem; 12-month free access period. | Free tier resources are relatively limited compared to some competitors.                            |
| Amazon Web Services   | Free tier with usage limits on EC2, S3, and other services.                                                                                     | Extensive services, large community support.                            | Free tier is primarily for introductory use; limits are easily reached for production applications. |
| Oracle Cloud          | Generous free tier including credits and always-free services; particularly attractive for ARM-based VMs.                                       | Very generous free tier, good for ARM-based workloads.                  | Can be complex to navigate for beginners.                                                           |
| Cloudflare            | Free CDN, DDoS protection, DNS management, and Workers (serverless compute).                                                                    | Excellent for web performance and security.                             | Limited customization in the free plan.                                                             |
| IBM Cloud             | Free tier with usage limits on various services (Cloud Functions, Object Storage, etc.); specifics vary and should be checked on their website. | Wide range of services available in the free tier.                      | Free tier limits and specifics can be less transparent than other providers.                        |

## **Policy for Self-Hosting vs. Cloud Adoption**

Prioritize free-tier cloud hosting unless data control, sovereignty, or regulatory compliance mandates self-hosting and a cost-benefit analysis justifies the added operational overhead. A local-first strategy should be adopted whenever feasible. Consider managed OSS hosting providers as a hybrid approach. Thoroughly assess operational costs (hardware, electricity, personnel) and risks (security, backups, disaster recovery) associated with self-hosting. A comprehensive cost-benefit analysis is crucial for determining the best approach for each application.

## **Implementation and Review**

Annually review software usage, costs, and policy adherence. Decommission tools exceeding free-tier limits without proportional value. Provide training and documentation for consistent policy application. Continuously refine the policy based on evolving cloud offerings, security threats, and operational experiences. Regular reviews ensure that the policy remains effective and up-to-date.

## **Detailed Principles for Policy Application**

This section details the preferred software choices for various categories, prioritizing open-source solutions and free tiers where appropriate.  The policy balances cost-effectiveness with security, data sovereignty, and operational efficiency.  Self-hosting is considered only when absolutely necessary due to data sensitivity, regulatory compliance, or specific control requirements.  The listed alternatives provide a range of options to suit diverse needs and scales.

1. **Cloud Storage and Collaboration Tools:**
   * **Policy:** All data must be version-controlled using Git and pushed to our GitHub remote repository. This repository automatically mirrors to GitLab and Bitbucket for redundant backups. For sensitive repositories, we enhance security through at-rest encryption using git-remote-gcrypt, with encryption credentials managed securely via PassWarden. You may also utilize our private Radicle seed node for decentralized storage.
   * **Local-first Software:** Tools such as Obsidian and AnyType integrate with Git, enhancing functionality while maintaining local storage benefits.
   * **Data Sovereignty:** Ensure all data storage and processing adheres to relevant jurisdictional requirements. Implement geographic restrictions where necessary and maintain comprehensive audit logs of data access and movement.
2. **Git Version Control:**
   * **Preferred:** Git (self-hosted or via GitHub, GitLab, Bitbucket free tiers). Git is the industry-standard distributed version control system.  Radicle.xyz provides a decentralized peer-to-peer backup option for enhanced security and resilience.
   * **Alternatives:** Mercurial (distributed, simpler than Git),  Fossil (integrated bug tracking and wiki),  Subversion (centralized, mature, but less flexible than Git),  Bazaar (supports both centralized and distributed workflows).
   * **Policy:** Utilize Git for all version control needs.  Leverage GitHub, GitLab, or Bitbucket free tiers for convenience and collaboration.  Implement git-remote-gcrypt for encrypting sensitive data in transit and at rest.  Consider Radicle.xyz for decentralized backup of critical repositories.
3. **Web Hosting and Content Delivery:**

> \[!IMPORTANT] **Security Best Practices**:Implement regular security audits of static site generator plugins and dependencies. Keep all components updated to their latest stable versions. Use automated vulnerability scanning tools to detect potential security issues in generated code. Follow secure coding guidelines when developing custom themes or components.\[!INFO] **Dependency Management**Maintain a strict version control policy for all dependencies. Regularly review and update package dependencies through tools like npm audit or yarn audit. Implement automated security checks in the CI/CD pipeline to catch vulnerable dependencies before deployment.\[!NOTE] **Content Security Policy**Configure appropriate Content Security Policy (CSP) headers to prevent XSS attacks and other security vulnerabilities. Implement HTTPS-only access and proper SSL/TLS configuration. Regular security headers auditing helps maintain a strong security posture.

* **Preferred:** Static site generators (Hugo, Jekyll, Gatsby) deployed via Cloudflare's free CDN for small to medium-sized websites.  This approach offers excellent performance, security, and scalability at minimal cost.
* **Alternatives:**  Netlify (free tier with limited bandwidth),  Vercel (free tier with limited bandwidth),  AWS Amplify (free tier with limited resources),  Google Firebase Hosting (free tier with limited resources),  InfinityFree (free hosting with limitations).
* **Policy:**  Utilize Cloudflare's free CDN and static site generators for most websites.  Consider self-hosting only when extensive customization or control is required, and the cost-benefit analysis justifies the increased operational overhead.  For larger sites, explore the free tiers of other providers, carefully evaluating bandwidth and resource limitations.

1. **Communication Tools:**
   * **Preferred:** Matrix (Element client) provides a decentralized, secure, and federated communication platform.  Rocket.Chat is another strong open-source alternative.
   * **Alternatives:**  Teams.cc (free for team communication),  Slack (free tier with limitations),  Microsoft Teams (free tier with limitations),  Discord (free for community communication),  Wire (free tier with limitations),  Signal (free and privacy-focused).
   * **Policy:**  Favor Matrix or Rocket.Chat for team communication, prioritizing open standards and data sovereignty.  Use free tiers of other platforms only when necessary and when their limitations are acceptable.  Consider self-hosting Matrix or Rocket.Chat for highly sensitive communications or stringent privacy requirements.
2. **Project Management Tools:**
   * **Preferred:** OpenProject (open-source, feature-rich),  Redmine (open-source, mature),  Leantime (open-source, agile-focused),  ProjectLibre (open-source, Microsoft Project alternative).
   * **Alternatives:**  Trello (free tier with limitations),  Asana (free tier with limitations),  Jira (free for open-source projects),  Monday.com (free tier with limitations),  Notion (free tier with limitations).
   * **Policy:**  Prioritize open-source project management tools like OpenProject or Redmine for better control and transparency.  Use free tiers of other platforms only when their limitations are acceptable and features align with project needs.
3. **Automation and Orchestration:**
   * **Preferred:** Ansible (open-source, agentless, powerful),  Terraform (open-source, infrastructure-as-code),  Chef (open-source, configuration management),  Puppet (open-source, configuration management).
   * **Alternatives:**  CloudPanel (open-source web hosting control panel),  i-MSCP (open-source web hosting control panel),  Ajenti (open-source web hosting control panel),  VestaCP (open-source web hosting control panel),  FOSSBilling (open-source hosting billing and client management).
   * **Policy:**  Utilize Ansible and Terraform for infrastructure automation and configuration management.  Choose tools based on the specific automation needs and existing infrastructure.  Explore open-source alternatives to minimize costs and maximize control.
4. **Accounting Software:**
   * **Preferred:** GnuCash (open-source, robust),  ZipBooks (free plan with limitations),  Springly (free plan with limitations, specifically for nonprofits).
   * **Policy:**  Choose accounting software based on the size and complexity of the organization's financial operations.  Consider open-source options like GnuCash for greater control and transparency.  Free plans from commercial providers are suitable for basic accounting needs, but limitations should be carefully considered.
5. **Graphic Design:**
   * **Preferred:** Canva (free plan with limitations, generous free features for nonprofits).
   * **Policy:**  Utilize Canva for basic graphic design needs.  Consider paid alternatives only when more advanced features are required.
6. **Fundraising Software (Nonprofits):**
   * **Preferred:** Zeffy (free, all-in-one platform for nonprofits).
   * **Policy:**  For nonprofits, Zeffy offers a comprehensive free solution for fundraising management.

**Implementation and Review**

Annually review software usage, costs, and policy adherence.  Decommission tools exceeding free-tier limits without proportional value.  Provide training and documentation for consistent policy application.  Continuously refine the policy based on evolving cloud offerings, security threats, and operational experiences.

***

History Version:

# **Choice of Software Policy**

This policy establishes a comprehensive and principled framework for evaluating and selecting software solutions, tailored to align with core values of openness, control, cost-efficiency, and operational simplicity. The principles herein are informed by rigorous analysis and designed to balance the advantages of open-source and self-hosted software with the pragmatic challenges of infrastructure management and scalability.

***

**Policy Objectives and Core Values**

1. **Open Source First:**
   * **Transparency:** Preference for open-source software (OSS) due to its inspectable and modifiable codebase, promoting trust and enabling customization.
   * **Community and Innovation:** Prioritize OSS projects with active communities to leverage collective expertise and sustained development.
   * **Cost Reduction:** Avoid licensing fees, ensuring research budgets are optimized.
2. **Control and Data Sovereignty:**
   * **Self-Hosting:** Favor self-hosted solutions to retain data ownership and avoid vendor lock-in. Ensure support for data portability using open standards.
   * **Decentralization:** Evaluate options that distribute infrastructure reliance, enhancing resilience and autonomy.
3. **Frugality and Resource Optimization:**
   * **Infrastructure Efficiency:** Select lightweight, resource-efficient software to minimize operational costs and environmental impact.
   * **Cost-Aware Selection:** Balance total cost of ownership (TCO) against feature sets and long-term usability.
4. **Operational Simplicity:**
   * **Ease of Deployment and Management:** Opt for solutions with intuitive interfaces and robust documentation to reduce the operational burden.
   * **Scalable Architecture:** Ensure software can scale with demands while maintaining performance and reliability.
5. **Security and Compliance:**
   * **Proven Security Track Record:** Choose software with regular updates, strong encryption standards, and a clear commitment to addressing vulnerabilities.
   * **Compliance Alignment:** Ensure software adheres to applicable regulatory standards (e.g., GDPR, HIPAA) where necessary.

***

**Principles for Software Evaluation**

1. **Needs Assessment:**
   * Conduct a thorough analysis of project requirements, engaging stakeholders to prioritize features and define critical success factors.
   * Identify gaps in existing solutions to determine whether new software is required.
2. **Open Source Evaluation:**
   * **Project Maturity:** Assess release frequency, code quality, and community activity.
   * **Longevity Indicators:** Look for institutional support or significant community contributions ensuring project sustainability.
   * **Adaptability:** Ensure extensibility through plugins, APIs, or integrations.
3. **Hosting Strategy:**
   * **Self-Hosted Solutions:** Prioritize when control and data security are paramount. Evaluate resource requirements against hosting capabilities.
   * **Managed Services:** When operational simplicity outweighs autonomy, prefer managed hosting options that still uphold OSS principles.
4. **Cost Optimization:**
   * **Free and Low-Cost Tiers:** Leverage free-tier offerings judiciously while avoiding reliance on offerings that may introduce future cost burdens.
   * **Lifecycle Costs:** Consider long-term operational expenses, including maintenance, upgrades, and training, in cost analysis.
5. **Security and Resilience:**
   * **Encryption Standards:** Mandate end-to-end encryption for sensitive data. Use tools like GPG for repository encryption where applicable.
   * **Backup and Recovery:** Develop rigorous backup protocols, including offsite storage and automated verification processes.
   * **Access Controls:** Implement role-based access control (RBAC) and enforce multi-factor authentication (MFA) to secure sensitive systems.
6. **Operational Simplicity:**
   * Automate routine tasks using Infrastructure-as-Code (e.g., Terraform, Ansible) and container orchestration (e.g., Kubernetes).
   * Ensure integration with existing workflows and compatibility with collaboration tools.

***

**Policy Application Examples**

1. **Version Control:**
   * **Preferred:** Git (with GitHub, GitLab, or Bitbucket for hosting). For sensitive data, use decentralized systems like Radicle with encrypted nodes.
   * **Best Practices:** Employ detailed commit templates, branching strategies (e.g., Gitflow), and regular audits of access permissions.
2. **Cloud Storage and Collaboration:**
   * **Preferred:** Nextcloud for self-hosting; managed alternatives for reduced operational burden. Enable federated sharing and end-to-end encryption.
   * **Key Considerations:** Optimize storage costs with redundancy mechanisms and ensure compatibility with existing workflows.
3. **Project Management:**
   * **Preferred:** OpenProject or Taiga (self-hosted or managed) for agile and research workflows.
   * **Scalability:** Integrate with CI/CD pipelines and version control systems.
4. **Communication Tools:**
   * **Preferred:** Matrix (with Element client) or Rocket.Chat. Focus on decentralized, encrypted communication solutions.
   * **Security Practices:** Implement strict encryption policies and secure credential management protocols.
5. **Automation and Orchestration:**
   * **Preferred:** Use Terraform for infrastructure provisioning and Ansible for configuration management. Ensure that all scripts are version-controlled.
   * **Sustainability:** Document processes and maintain compatibility across diverse cloud environments.

***

**Governance and Review**

1. **Continuous Improvement:**
   * Regularly revisit this policy to incorporate emerging technologies and address evolving organizational needs.
   * Solicit feedback from users and stakeholders to identify pain points and opportunities for refinement.
2. **Audit and Compliance:**
   * Conduct periodic audits of software solutions to ensure adherence to policy principles and compliance with security standards.
   * Develop a risk management framework to address vulnerabilities and mitigate potential impacts.

***

This policy establishes a robust, principled approach to software selection, balancing the ideals of openness, autonomy, and efficiency with pragmatic considerations. By aligning software choices with these guidelines, organizations can foster innovation, enhance resilience, and ensure the long-term sustainability of their technology ecosystem.
