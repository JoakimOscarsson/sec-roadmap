const t="window.ROADMAP_MARKDOWN = \"# Security Learning Roadmap\\n\\nUpdated: 2026-04-30\\n\\nThis is the restructured version of `security-roadmap_combined.md`. It keeps the same coverage, but uses one clearer hierarchy: map and navigation first, then the ordered core curriculum, then specialist domains, then practice artifacts, then reference material.\\n\\nThe key distinction is:\\n\\n- Core Curriculum: what to learn first, in pedagogical order.\\n- Specializations: where to go deeper after or alongside the core.\\n- Practice Portfolio: what to produce to prove understanding.\\n- Learning Paths: suggested routes through the curriculum, specializations, and practice work.\\n- Reference Library: what to look up while studying or applying the roadmap.\\n\\n## 1. Map And How To Use This Roadmap\\n\\n### 1.1 What This Roadmap Is\\n\\nThis roadmap is for building a broad foundation across information security, cybersecurity, data security, privacy, säkerhetsskydd, EU and Swedish regulation, technical security, management, cloud security, embedded R&D, AI/LLM/agentic security, defence industry, IoT, automotive, and cross-domain security work.\\n\\nIt is not legal advice. For legal, regulatory, procurement, or compliance decisions, verify against current official texts and involve qualified counsel.\\n\\n### 1.2 How The Roadmap Is Organized\\n\\nThere are three content layers:\\n\\n1. Core Curriculum: the broad foundation everyone should study first.\\n2. Specializations: deeper branches for embedded, AI, defence, IoT, automotive, cloud, and cross-domain intersections.\\n3. Practice Portfolio: concrete artifacts that turn reading into competence.\\n\\nThe Learning Paths below are navigation routes through those layers, not additional content competing with them.\\n\\nWithin chapters, the section types have different purposes:\\n\\n- Learn: topics, concepts, terms, standards, laws, frameworks, and domain areas to understand.\\n- Practice: exercises, scenarios, labs, reviews, comparisons, and applied work.\\n- Deliverables: artifacts, templates, diagrams, memos, playbooks, mappings, and evidence to produce.\\n- Read / Watch / Courses: source material and training routes.\\n\\n### 1.3 Pedagogical Order\\n\\nThe order below is deliberately adjusted from the original roadmap. It is easier to learn security if you move from foundations to systems, then controls, then regulation, then domains:\\n\\n1. Mental model, terminology, and learning method.\\n2. IT, networking, operating systems, identity, and cloud basics.\\n3. Governance, risk, policy, audit, suppliers, and management.\\n4. Core cyber defense: hardening, vulnerability management, endpoint, network, logging, backup.\\n5. Cloud, infrastructure, SaaS, container, and platform security.\\n6. Secure engineering, AppSec, DevSecOps, software supply chain.\\n7. Data security, privacy, and records.\\n8. Detection, incident response, forensics, threat intelligence, business continuity, and disaster recovery.\\n9. EU and Swedish regulation, including NIS2/Cybersäkerhetslagen, GDPR, DORA, CER, CRA, AI Act, LEK.\\n10. Säkerhetsskydd in depth.\\n11. Offensive security and assurance.\\n12. Leadership, soft skills, and security strategy.\\n13. Specialist verticals: embedded R&D, AI/LLM/agentic, defence industry, IoT, automotive, cloud.\\n14. Cross-domain intersections and specialization paths.\\n\\nThis order gives you enough technical and management context before the laws, and enough legal context before the sector-specific areas.\\n\\n### 1.4 How To Study\\n\\nDo not try to learn everything linearly or exhaustively. Work in cycles:\\n\\n1. Build a mental map.\\n2. Anchor in one major framework, preferably NIST CSF 2.0 or ISO/IEC 27001.\\n3. Learn enough technical breadth to ask good questions.\\n4. Learn enough governance and risk to explain why controls matter.\\n5. Create evidence: diagrams, risk assessments, policies, control mappings, incident reports, threat models, and architecture notes.\\n6. Specialize based on role, market, and interest.\\n\\nEvery topic should eventually produce one of these artifacts:\\n\\n- A one-page explanation.\\n- A diagram.\\n- A checklist.\\n- A risk assessment.\\n- A control mapping.\\n- A procedure or runbook.\\n- A test or lab report.\\n- A decision memo.\\n\\n### 1.5 Core Mental Model\\n\\nSecurity is not one discipline. It is the coordination of people, process, technology, law, and business risk under adversarial conditions.\\n\\n#### Foundational Concepts\\n\\n- CIA triad: confidentiality, integrity, availability.\\n- AAA: authentication, authorization, accounting/auditing.\\n- Authenticity, accountability, non-repudiation, privacy, safety, resilience.\\n- Threat, vulnerability, risk, control, exposure, likelihood, impact, residual risk.\\n- Defense in depth.\\n- Least privilege, need to know, separation of duties.\\n- Assume breach.\\n- Security by design and privacy by design.\\n- Compliance as a floor, not a ceiling.\\n- Kill-chain and attack-path thinking.\\n- Threat actors: opportunistic criminals, organized crime, insiders, hacktivists, competitors, nation-state actors, foreign intelligence services.\\n\\n#### Important Distinctions\\n\\n- Information security: protecting information in all forms, including digital, paper, spoken, process, people, suppliers, and facilities.\\n- Cybersecurity: protecting digital systems, networks, identities, software, services, and digital data from cyber threats.\\n- IT security: operational security of endpoints, servers, networks, SaaS, cloud, identity, logging, backup, and configuration.\\n- Data security: protecting data through its lifecycle: collection, use, sharing, storage, retention, deletion, leakage prevention, and encryption.\\n- Privacy and data protection: lawful, fair, transparent, purpose-limited, accountable processing of personal data.\\n- Säkerhetsskydd: Swedish protective security for security-sensitive activities relevant to Sweden's security or binding international protective security commitments.\\n- OT/ICS security: protecting industrial control systems, SCADA, PLCs, sensors, actuators, and cyber-physical processes where safety and availability often dominate.\\n- Product security: building and maintaining secure products through their full lifecycle.\\n- Embedded security: product security where hardware, firmware, manufacturing, physical access, and field lifecycle are central.\\n- AI security: security of models, data, prompts, tools, agents, AI pipelines, AI infrastructure, and AI-enabled decisions.\\n- GRC: governance, risk management, compliance, assurance, audit, policy, metrics, and management reporting.\\n\\n### 1.6 Domain Map\\n\\nUse NIST CSF 2.0 as a simple organizing model:\\n\\n- Govern: strategy, roles, policy, risk appetite, accountability, legal obligations, oversight.\\n- Identify: assets, business context, dependencies, suppliers, data, risk assessment.\\n- Protect: access control, awareness, data security, platform security, secure development, maintenance.\\n- Detect: telemetry, monitoring, anomaly detection, threat hunting, continuous diagnostics.\\n- Respond: incident handling, communication, analysis, containment, mitigation.\\n- Recover: restoration, resilience, lessons learned, communication, improvement.\\n\\nCross-cutting areas:\\n\\n- Privacy and data protection.\\n- Physical and environmental security.\\n- Personnel security.\\n- Supplier and supply-chain security.\\n- Business continuity and crisis management.\\n- Legal and regulatory compliance.\\n- Security culture.\\n- Architecture and secure design.\\n\\n### 1.7 Learning Paths\\n\\nUse these as routes through the roadmap. A path tells you which parts of the Core Curriculum to prioritize, which Specializations to add, and which Practice Portfolio artifacts to produce.\\n\\n#### Broad Generalist: 12-18 Months\\n\\n##### Months 1-2: Foundations And Framework\\n\\n- Learn core security terminology.\\n- Read NIST CSF 2.0 or ISO/IEC 27001 overview.\\n- Build a small lab.\\n- Create an asset inventory and network diagram.\\n\\n##### Months 3-4: Technical Breadth\\n\\n- Networking, OS basics, identity, TLS/PKI, cloud fundamentals.\\n- Build and harden Linux/Windows systems.\\n- Learn Active Directory and Entra ID basics.\\n\\n##### Months 5-6: Cyber Defense And Cloud\\n\\n- Vulnerability management, EDR, logging, backup, network segmentation.\\n- Build a cloud landing zone.\\n- Write runbooks and hardening baselines.\\n\\n##### Months 7-8: Secure Engineering And Data\\n\\n- OWASP Top 10, API security, secure SDLC, DevSecOps.\\n- Data classification, GDPR basics, DPIA, ROPA.\\n- Build threat models and data flow diagrams.\\n\\n##### Months 9-10: IR, Threat Intel, Resilience, And Assurance\\n\\n- NIST SP 800-61, MITRE ATT&CK, BIA/BCP/DRP basics, tabletop exercises.\\n- Learn pen-test methodology enough to interpret findings.\\n- Write an incident report, detection map, and BCP/DRP outline.\\n\\n##### Months 11-12: EU And Swedish Regulation\\n\\n- GDPR, NIS2, Cybersäkerhetslagen, DORA, CER, CRA, AI Act, LEK.\\n- Swedish public-sector rules: OSL, TF/YGL, records, procurement.\\n- Build an applicability matrix.\\n\\n##### Months 13-15: Säkerhetsskydd\\n\\n- Säkerhetsskyddslagen, förordningen, PMFS, Säpo guidance.\\n- Run a mock säkerhetsskyddsanalys.\\n- Study SUA, security vetting, classification, supervisory landscape.\\n\\n##### Months 16-18: Specialize\\n\\nPick one track: cloud, AppSec, SOC/IR, privacy, GRC, säkerhetsskydd, embedded, AI, automotive, IoT, defence.\\n\\n#### Embedded R&D Track\\n\\n1. Pick a Cortex-M dev kit and read the security reference manual.\\n2. Build signed firmware with MCUboot or TF-M.\\n3. Implement secure communications with TLS/DTLS/OSCORE/EDHOC.\\n4. Learn provisioning and attestation.\\n5. Do ChipWhisperer tutorials or equivalent side-channel labs.\\n6. Harden embedded Linux with Yocto, dm-verity, IMA, signed boot.\\n7. Threat model a product across development, manufacturing, deployment, maintenance, and decommissioning.\\n\\n#### AI/LLM/Agentic Track\\n\\n1. Read OWASP LLM Top 10, OWASP Agentic guidance, NIST AI RMF, and AI Act relevant sections.\\n2. Build a RAG app.\\n3. Test prompt injection and RAG poisoning.\\n4. Build a small tool-using agent.\\n5. Add MCP or equivalent tool integration and review permissions.\\n6. Run AI red-team tools.\\n7. Write a DPIA, AI Act tiering memo, and NIST AI RMF mapping.\\n\\n#### Automotive Cybersecurity Track\\n\\n1. Read ISO/SAE 21434, UN R155, UN R156, ISO 24089.\\n2. Learn ISO 26262 and SOTIF context.\\n3. Run TARA exercises.\\n4. Study CAN, Ethernet, UDS, DoIP, AUTOSAR, SecOC, HSMs.\\n5. Study OTA and diagnostic security.\\n6. Learn VSOC and coordinated disclosure.\\n7. Produce ISO/SAE 21434 work products.\\n\\n#### Defence / Säkerhetsskydd Track\\n\\n1. Read säkerhetsskyddslagen, förordningen, PMFS, Säpo guidance, and KSF where relevant.\\n2. Run a complete säkerhetsskyddsanalys.\\n3. Study security vetting and SUA.\\n4. Study NATO classification and industrial security context.\\n5. Learn TEMPEST, COMSEC, Common Criteria, and export control basics.\\n6. Build a defence supplier security plan.\\n\\n#### IoT Product Security Track\\n\\n1. Read ETSI EN 303 645, NISTIR 8259/8425, CRA, RED/EN 18031, SUIT/RATS/EDHOC.\\n2. Build a small device + cloud + app architecture.\\n3. Implement device identity and secure onboarding.\\n4. Add signed updates and fleet monitoring.\\n5. Map controls to CRA and ETSI.\\n6. Run a privacy assessment for telemetry.\\n7. Write an EOL and vulnerability disclosure plan.\\n\\n#### Cloud Security Track\\n\\n1. Read CSA Cloud Controls Matrix, ISO/IEC 27017, ISO/IEC 27018, NIST SP 800-207, CIS Benchmarks, and the main provider security reference architectures.\\n2. Build a multi-account, subscription, or project landing zone.\\n3. Implement identity federation, least privilege, workload identity, privileged access, and break-glass access.\\n4. Design cloud networking with segmentation, private endpoints, controlled egress, WAF, DDoS protection, and DNS security.\\n5. Build centralized logging for identity, control plane, network, workload, storage, and SaaS activity.\\n6. Secure containers, Kubernetes, CI/CD, IaC, secrets, and artifact registries.\\n7. Write cloud incident runbooks for exposed storage, compromised keys, cryptomining, ransomware, and data leakage.\\n8. Map cloud controls to ISO/IEC 27001, NIST CSF, CIS Controls, NIS2/Cybersäkerhetslagen, DORA, GDPR, and säkerhetsskydd where relevant.\\n\\n#### Cross-Domain Track\\n\\nPick two:\\n\\n- Embedded + automotive.\\n- Embedded + defence.\\n- AI + automotive.\\n- AI + IoT.\\n- AI + cloud.\\n- Defence + AI.\\n- Defence + cloud.\\n- IoT + cloud/platform.\\n- Automotive + cloud.\\n- Embedded + cloud/platform.\\n\\nExpect 18-24 months for credible cross-domain competence.\\n\\n## 2. Core Curriculum\\n\\nThis is the main ordered learning body. Work through it broadly before going deep, unless your job already forces a specialization.\\n\\n### Phase 1: IT, Networking, Identity, And Systems Basics\\n\\nGoal: understand what security protects and how modern systems work.\\n\\n#### Learn\\n\\n- Computer basics: CPU, memory, storage, filesystems, processes, services, permissions.\\n- Linux: users/groups, permissions, sudo, systemd, logs, auditd, SELinux/AppArmor, package management.\\n- Windows: Active Directory, Group Policy, Kerberos, NTLM, event logs, PowerShell, local security policy.\\n- macOS: endpoint context, permissions, FileVault, MDM, logs.\\n- Networking: TCP/IP, DNS, HTTP/HTTPS, TLS, routing, switching, NAT, VPN, proxies, reverse proxies.\\n- Network architecture: OSI model, IPv4/IPv6, VLANs, routing domains, traffic flows, management plane vs data plane, SDN, CDN, edge networks.\\n- Wireless: WPA2/WPA3, 802.1X, EAP, enterprise Wi-Fi.\\n- Email basics: SMTP, SPF, DKIM, DMARC.\\n- Identity: users, groups, roles, MFA, SSO, federation, SAML, OAuth 2.0/2.1, OIDC, SCIM, FIDO2/WebAuthn, passkeys.\\n- Databases: relational vs NoSQL, backups, access control, SQL injection basics.\\n- Cryptography basics: symmetric encryption, asymmetric encryption, hashing, digital signatures, certificates, PKI, key exchange, random number generation.\\n- Scripting: shell, PowerShell, Python for parsing logs and automating checks.\\n- Cloud basics: shared responsibility, regions, accounts/subscriptions/projects, IAM, storage, KMS, logging, network security groups.\\n\\n#### Practice\\n\\n- Build a lab with one Linux VM, one Windows VM, and a simple network diagram.\\n- Harden SSH and remote access.\\n- Enable host firewalls and automatic updates.\\n- Review Linux and Windows logs.\\n- Explain DNS, TLS, OAuth/OIDC, and Kerberos on one page each.\\n- Explain basic PKI, certificate validation, and key exchange on one page.\\n- Build a simple asset inventory.\\n\\n#### Deliverables\\n\\n- Network diagram.\\n- Asset inventory.\\n- Identity model diagram.\\n- Glossary of core terms.\\n- PKI and certificate validation note.\\n- Short write-up: how a phishing email can become a ransomware incident.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [Computer Networking: A Top-Down Approach](https://www.pearson.com/en-us/subject-catalog/p/computer-networking-a-top-down-approach/P200000013385/9780135415603) - canonical networking text for TCP/IP, DNS, HTTP, routing, and TLS context.\\n- Read: [How Linux Works, 3rd ed.](https://nostarch.com/howlinuxworks3) - practical bridge from Linux commands to OS internals, processes, filesystems, networking, and services.\\n- Read: [NIST SP 800-63-4 Digital Identity Guidelines](https://csrc.nist.gov/pubs/sp/800/63/4/final) - authoritative reference for identity proofing, MFA, authenticators, federation, and modern authentication assurance.\\n- Watch: [Professor Messer Network+ N10-009](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/) - widely used free video course for structured networking fundamentals.\\n- Course: [Linux Foundation LFS101 Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/) - free official Linux course for shell, processes, networking, files, users, and basic administration.\\n- Lab: [TryHackMe Pre Security](https://tryhackme.com/path/outline/presecurity) - guided browser labs for networking, Linux, Windows, web basics, and introductory security.\\n\\n### Phase 2: Information Security, Governance, And Risk\\n\\nGoal: learn how security becomes a managed business function.\\n\\n#### Learn\\n\\n- ISMS: ISO/IEC 27001 and ISO/IEC 27002.\\n- Risk management: ISO 31000, ISO/IEC 27005, NIST SP 800-30/37/39.\\n- FAIR: quantitative cyber risk thinking.\\n- Qualitative risk methods: heat maps, bow-tie analysis, risk workshops.\\n- Inherent vs residual risk.\\n- Risk treatment: avoid, mitigate, transfer, accept.\\n- Risk appetite, risk tolerance, risk ownership.\\n- Control types: preventive, detective, corrective, directive, deterrent, compensating.\\n- Due care, due diligence, professional ethics, organizational ethics, and conflicts of interest.\\n- Policy hierarchy: policy, standard, procedure, guideline, record.\\n- Three lines model: operational management, risk/compliance, internal audit.\\n- Security governance: CISO, CSO, DPO, säkerhetsskyddschef, system owner, risk owner, data owner, security architect, SOC, legal, procurement, HR, audit.\\n- Security committees, management review, board reporting.\\n- Compliance and audit: control design vs operating effectiveness, evidence collection, sampling, exceptions, remediation tracking.\\n- Security program management: scope, roadmap, budget, business case, resources, control implementation, control testing, communications, reporting.\\n- Supplier security: due diligence, contractual controls, right to audit, subcontractors, exit plans, concentration risk.\\n- Personnel security: screening, onboarding, role changes, offboarding, employment agreements, contractor controls, insider-risk indicators, HR/legal coordination.\\n- Security awareness and culture: role-based training, champions networks, phishing simulations done responsibly.\\n- Organizational culture: incentives, accountability, escalation norms, executive sponsorship, risk acceptance behavior.\\n- Metrics: KPIs, KRIs, KCIs, leading vs lagging indicators, avoiding vanity metrics.\\n\\n#### Practice\\n\\n- Draft an ISMS scope statement.\\n- Create a risk register with at least 10 risks.\\n- Map 10 ISO/IEC 27002 controls to evidence.\\n- Write a concise information security policy.\\n- Write an access control standard.\\n- Create a supplier due diligence checklist.\\n- Write a small security program charter with roles, resources, and reporting cadence.\\n- Build an awareness program plan with target groups, content cycle, and effectiveness measures.\\n- Create a personnel security checklist for onboarding, transfer, and offboarding.\\n- Write one executive risk memo.\\n\\n#### Deliverables\\n\\n- ISMS scope.\\n- Risk methodology.\\n- Risk register.\\n- Statement of Applicability draft.\\n- Security policy.\\n- Access control standard.\\n- Supplier security checklist.\\n- Security program charter.\\n- Awareness and training plan.\\n- Personnel security checklist.\\n- Management review agenda.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) - clean organizing model for governance, risk, controls, communication, and improvement.\\n- Read: [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) and [ISO/IEC 27002:2022](https://www.iso.org/standard/75652.html) - global ISMS and control baseline for scope, risk treatment, SoA, management review, and control design.\\n- Read: [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) and [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) - classic risk assessment and risk management lifecycle references.\\n- Read: [Measuring and Managing Information Risk: A FAIR Approach](https://www.fairinstitute.org/fair-book) - canonical quantitative cyber-risk book for likelihood, loss magnitude, and business risk language.\\n- Watch: [NIST CSF 2.0 Videos](https://www.nist.gov/cyberframework/videos) - official explanation of the CSF 2.0 structure, including the Govern function.\\n- Course: [EU Academy ENISA Foundations of IT Security and Risk Management](https://academy.europa.eu/courses/foundations-of-it-security-and-risk-management-itsrm) - official EU risk-management course with assessment.\\n- Course: [MSB Operativ informationssäkerhetskurs](https://www.msb.se/sv/utbildning--ovning/alla-utbildningar/informationssakerhet---operativ-informationssakerhetskurs-en-introduktionskurs-till-informationssakerhet/) - Swedish authority course for practical information-security roles.\\n\\n### Phase 3: Core Cyber Defense\\n\\nGoal: understand the controls that prevent or reduce common cyber incidents.\\n\\n#### Learn\\n\\n- Secure configuration baselines: CIS Benchmarks, hardened OS images, secure-by-default templates.\\n- Configuration and change management: baselines, approved changes, emergency changes, drift detection, asset ownership, service dependencies.\\n- Vulnerability management: discovery, scanning, CVE, CVSS, EPSS, CISA KEV, compensating controls, patch SLAs.\\n- Endpoint security: EDR/XDR, application control, device encryption, local admin control, device posture.\\n- Network security: segmentation, micro-segmentation, ingress/egress filtering, DNS security, web proxying, NAC, ZTNA, SASE.\\n- Email security: anti-phishing, sandboxing, SPF, DKIM, DMARC, user reporting.\\n- Identity security: MFA, conditional access, PAM, JIT access, service accounts, workload identity, passkeys, break-glass accounts.\\n- Secrets management: vaults, KMS, secret rotation, no secrets in repositories.\\n- Logging and monitoring: log sources, time sync, SIEM, detection rules, dashboards, retention, alert quality.\\n- Backup and recovery: immutable backups, restore tests, RPO/RTO, ransomware recovery.\\n- Physical and environmental controls: restricted areas, visitor control, server rooms, wiring closets, media storage, power, UPS, HVAC, fire detection and suppression.\\n- Media and resource protection: removable media rules, secure storage, transport, sanitization, disposal, and chain of custody.\\n- Security operations: triage, escalation, runbooks, case management, post-incident improvement.\\n\\n#### Practice\\n\\n- Build a vulnerability management workflow.\\n- Scan a lab and prioritize remediation.\\n- Configure centralized logs from Linux and Windows.\\n- Create a simple change-management workflow for security-impacting changes.\\n- Review a small office or lab environment for physical and environmental controls.\\n- Write a credential-theft incident runbook.\\n- Run a backup restore test and document the restore time.\\n- Build a basic detection rule mapped to MITRE ATT&CK.\\n\\n#### Deliverables\\n\\n- Vulnerability management procedure.\\n- Hardening checklist.\\n- Logging source inventory.\\n- Backup and restore report.\\n- Identity security baseline.\\n- Change-management workflow.\\n- Physical and environmental controls checklist.\\n- Detection coverage map.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [CIS Critical Security Controls v8.1](https://www.cisecurity.org/controls/v8-1) - prioritized defensive control set for inventory, hardening, access, logging, recovery, and response.\\n- Read: [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) - widely used secure configuration baselines for operating systems, cloud, network devices, and applications.\\n- Read: [NIST SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final) - strong enterprise patch and vulnerability-management reference.\\n- Read: [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) and [StopRansomware Guide](https://www.cisa.gov/sites/default/files/2025-03/StopRansomware-Guide%20508.pdf) - practical prioritization and ransomware prevention, detection, backup, and recovery guidance.\\n- Watch: [SANS Cyber Defense](https://www.youtube.com/@sanscyberdefense) - high-signal defensive security talks covering SOC work, hardening, endpoint, network, and detection.\\n- Lab: [TryHackMe SOC Level 1](https://tryhackme.com/r/path/outline/soclevel1) - structured hands-on SOC path for SIEM, endpoint, network attacks, and triage.\\n- Lab: [CyberDefenders Blue Team Labs](https://cyberdefenders.org/blue-team-labs/) - practical browser-based investigations for SOC, DFIR, threat hunting, and malware analysis.\\n\\n### Phase 4: Cloud, Infrastructure, SaaS, And Platform Security\\n\\nGoal: build judgement for modern infrastructure and shared-responsibility environments.\\n\\n#### Learn\\n\\n- Cloud shared responsibility.\\n- Landing zones and account/subscription/project structure.\\n- Cloud IAM: roles, policies, federation, service principals, workload identities, key rotation.\\n- Cloud networking: VPC/VNet, private endpoints, security groups, routing, WAF, DDoS protection.\\n- Cloud logging: control plane, data plane, identity, storage, network, SIEM integration.\\n- Encryption and key management: KMS, HSM, customer-managed keys, secret managers.\\n- Container security: minimal images, image signing, runtime controls, admission control.\\n- Kubernetes: RBAC, network policies, pod security, secrets, API server security, supply chain.\\n- Infrastructure as Code: Terraform/Bicep/Pulumi review, state protection, policy-as-code, drift detection.\\n- SaaS security: SSO, audit logs, sharing controls, tenant settings, SSPM, CASB.\\n- Cloud categories: CSPM, CWPP, CNAPP, CIEM.\\n- Sovereignty and jurisdiction: where data sits and who can access it.\\n- Zero Trust architecture: verify explicitly, least privilege, assume breach, continuous evaluation.\\n\\n#### Practice\\n\\n- Build a minimal secure cloud landing zone.\\n- Write cloud logging requirements.\\n- Review one Kubernetes deployment for security issues.\\n- Create a cloud incident runbook for exposed storage or compromised keys.\\n- Map cloud controls to CIS Controls and ISO/IEC 27001.\\n\\n#### Deliverables\\n\\n- Cloud reference architecture.\\n- IAM model.\\n- Cloud control checklist.\\n- Container/Kubernetes security checklist.\\n- Cloud incident runbook.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [CSA Security Guidance for Critical Areas of Focus in Cloud Computing v5](https://cloudsecurityalliance.org/artifacts/security-guidance-v5) and [CSA Cloud Controls Matrix](https://cloudsecurityalliance.org/research/cloud-controls-matrix/) - vendor-neutral cloud security architecture, governance, and control mapping.\\n- Read: [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) - authoritative model for identity-centric and continuously evaluated access.\\n- Read: [Kubernetes Security Checklist](https://kubernetes.io/docs/concepts/security/security-checklist/) and [NSA/CISA Kubernetes Hardening Guidance](https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/2716980/nsa-cisa-release-kubernetes-hardening-guidance/) - practical Kubernetes baseline for clusters, workloads, RBAC, secrets, and networking.\\n- Read: [AWS Security Reference Architecture](https://aws.amazon.com/prescriptive-guidance/security-reference-architecture/), [Azure CAF Secure](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/secure/), and [Google Cloud Security Pillar](https://cloud.google.com/architecture/framework/security) - provider-native reference architectures for landing zones and shared responsibility.\\n- Watch: [AWS re:Inforce On Demand](https://aws.amazon.com/events/reinforce/on-demand/), [Mandiant and Google Cloud Security](https://www.youtube.com/@mandiant), and [CNCF YouTube](https://www.youtube.com/@cncf) - cloud, Kubernetes, IAM, detection, and platform-security sessions from primary channels.\\n- Course: [CSA Certificate of Cloud Security Knowledge](https://cloudsecurityalliance.org/education/ccsk) - vendor-neutral cloud security foundation aligned to CSA guidance.\\n- Lab: [Kubernetes Goat](https://madhuakula.com/kubernetes-goat/) - intentionally vulnerable Kubernetes lab for RBAC, secrets, network policy, and runtime issues.\\n\\n### Phase 5: Secure Engineering, AppSec, DevSecOps, And Software Supply Chain\\n\\nGoal: understand how to build security into systems before they go live.\\n\\n#### Learn\\n\\n- Secure SDLC: requirements, design, implementation, testing, deployment, maintenance.\\n- Threat modeling: STRIDE, PASTA, attack trees, abuse cases, LINDDUN for privacy.\\n- Secure architecture principles: least privilege, defense in depth, secure defaults, fail securely, separation of duties, economy of mechanism, complete mediation, zero trust, privacy by design.\\n- Architecture review: assets, trust boundaries, attack surfaces, data flows, identity flows, control placement, abuse cases, failure modes, operational ownership.\\n- Security models: Bell-LaPadula, Biba, Clark-Wilson, Brewer-Nash / Chinese Wall, state machine model, lattice-based access control.\\n- Web security: OWASP Top 10, authentication, authorization, access control, input validation, output encoding, CSRF, SSRF, file upload security.\\n- API security: object-level authorization, token handling, rate limiting, schemas, replay protection.\\n- Mobile security: OWASP MASVS, local storage, platform permissions, certificate validation, deep links.\\n- Secure coding: secrets handling, dependency safety, error handling, safe cryptography APIs.\\n- Cryptography engineering: algorithm selection, crypto lifecycle, key hierarchy, PKI, certificate lifecycle, key rotation, crypto agility, common implementation mistakes.\\n- Cryptanalytic and implementation attacks: brute force, known/chosen plaintext or ciphertext concepts, downgrade attacks, timing, side channel, fault injection, padding oracles, misuse of randomness.\\n- DevSecOps: SAST, DAST, IAST, SCA, container scanning, IaC scanning, secret scanning.\\n- Fuzzing: protocol parsers, file formats, APIs, native code.\\n- Software supply chain: dependency confusion, typosquatting, maintainer compromise, build isolation, artifact repositories.\\n- SBOM: CycloneDX, SPDX.\\n- Provenance and signing: SLSA, in-toto, Sigstore, Cosign.\\n- CI/CD security: runner isolation, least privilege, protected branches, artifact signing, environment separation.\\n- Acquired software and managed services: COTS, open source, SaaS, cloud services, third-party libraries, support obligations, escrow, exit and replacement risk.\\n- Vulnerability disclosure: security contact, intake, triage, CVE basics, advisories.\\n\\n#### Practice\\n\\n- Threat model a small web app.\\n- Run an architecture review for a small system and document trust boundaries.\\n- Run OWASP Juice Shop or another intentionally vulnerable lab.\\n- Add dependency scanning and secret scanning to a test repository.\\n- Write a cryptography decision record for authentication, encryption, signing, and key storage.\\n- Write a vulnerability disclosure policy.\\n- Build a secure CI/CD checklist.\\n- Map one software supply-chain incident to preventive controls.\\n\\n#### Deliverables\\n\\n- Data flow diagram.\\n- Threat model.\\n- Architecture review note.\\n- Cryptography decision record.\\n- Secure coding checklist.\\n- CI/CD security checklist.\\n- SBOM and dependency process.\\n- Vulnerability disclosure and patch process.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [Security Engineering, 3rd ed.](https://www.cl.cam.ac.uk/archive/rja14/book.html) - Ross Anderson's open textbook on building dependable secure systems across software, hardware, operations, and organizations.\\n- Read: [Threat Modeling: Designing for Security](https://shostack.org/books/threat-modeling-book) - canonical practical treatment of STRIDE, design analysis, and threat-modeling workflow.\\n- Read: [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/), [OWASP Top 10](https://owasp.org/Top10/), [OWASP API Security](https://owasp.org/API-Security/), and [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) - standard AppSec requirements and testing references.\\n- Read: [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final), [SLSA](https://slsa.dev/), [CycloneDX](https://cyclonedx.org/specification/overview), and [SPDX](https://spdx.dev/use/specifications/) - core secure-development and software supply-chain references.\\n- Watch: [OWASP Foundation](https://www.youtube.com/@OWASPGLOBAL) and [OpenSSF](https://www.youtube.com/@OpenSSF) - broad AppSec, threat modeling, SBOM, Sigstore, SLSA, and open-source supply-chain material.\\n- Lab: [PortSwigger Web Security Academy](https://portswigger.net/web-security) - best free interactive web/API security lab set.\\n- Course: [Linux Foundation / OpenSSF Developing Secure Software LFD121](https://training.linuxfoundation.org/training/developing-secure-software-lfd121/) - free secure SDLC course covering requirements, design, coding, verification, and supply-chain basics.\\n\\n### Phase 6: Data Security, Privacy, And Records\\n\\nGoal: protect data according to value, sensitivity, lifecycle, and legal basis.\\n\\n#### Learn\\n\\n- Data lifecycle: collect, create, classify, use, share, store, archive, delete.\\n- Data classification: public, internal, confidential, restricted, personal data, special categories, security-classified information.\\n- Information and asset roles: owner, controller, custodian, processor, user, subject, system owner, data owner.\\n- Data inventory and mapping: systems, data stores, integrations, exports, logs, backups.\\n- Data states: in use, in transit, at rest, in backup, in archive, in logs, in test environments.\\n- Access control: RBAC, ABAC, row/column-level controls, privileged data access, JIT access.\\n- Encryption: at rest, in transit, key management, HSM/KMS, rotation, envelope encryption.\\n- Tokenization, pseudonymization, anonymization, masking, synthetic data.\\n- DLP and usage controls: endpoint, email, cloud storage, SaaS sharing, source code, AI prompts, DRM, CASB, watermarking.\\n- Retention and deletion: legal hold, archive, backup retention, data remanence, secure erasure, cryptographic erasure, destruction certificates.\\n- Asset and media handling: labeling, storage, transfer, transport, removable media, printouts, evidence media, disposal.\\n- End-of-life and end-of-support: data migration, decommissioning, archival access, unsupported systems, records obligations.\\n- GDPR principles: lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity/confidentiality, accountability.\\n- Controller, processor, sub-processor roles.\\n- DPIA methodology.\\n- ROPA: records of processing activities.\\n- International transfers: SCCs, adequacy, BCRs, transfer impact assessments, Schrems II implications.\\n- Data subject rights.\\n- DPO role and independence.\\n- PETs: differential privacy, homomorphic encryption, secure multi-party computation, federated learning, synthetic data.\\n\\n#### Practice\\n\\n- Create a data inventory and data flow map.\\n- Draft a data classification and handling standard.\\n- Draft media handling and secure destruction requirements.\\n- Perform a mock DPIA.\\n- Write a personal data breach decision tree.\\n- Map a cloud/SaaS data flow to GDPR roles and transfer mechanisms.\\n- Review one decommissioning scenario for retention, deletion, backups, and EOL/EOS risk.\\n\\n#### Deliverables\\n\\n- Data inventory.\\n- Data classification standard.\\n- Asset and media handling standard.\\n- DPIA template and mock DPIA.\\n- ROPA example.\\n- Breach notification checklist.\\n- Data retention and deletion schedule.\\n- Decommissioning and secure destruction checklist.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [GDPR on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj) - primary source for data protection principles, controller/processor roles, DPIA, breach, transfers, and security of processing.\\n- Read: [NIST Privacy Framework](https://www.nist.gov/privacy-framework) - practical privacy risk-management model that complements security controls.\\n- Read: [Handbook on European Data Protection Law](https://fra.europa.eu/en/node/26914) - respected open EU, Council of Europe, and EDPS privacy-law handbook.\\n- Read: [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final) and [ISO 15489-1:2016](https://www.iso.org/standard/62542.html) - canonical references for media sanitization, disposal, and records management.\\n- Read: [IMY DPIA guidance](https://www.imy.se/publikationer/vagledning-vid-konsekvensbedomning/) and [IMY ROPA guidance](https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/fora-register-over-behandling/) - Swedish authority support for DPIA and processing records.\\n- Watch: [NIST Privacy Framework: At a Glance](https://www.nist.gov/video/privacy-framework-glance) and [EDPB GDPR video](https://www.edpb.europa.eu/news/news/2019/edpb-video_en) - concise official privacy and GDPR overviews.\\n- Course: [IAPP CIPM](https://iapp.org/train/cipm-training/) and [IAPP CIPT](https://iapp.org/train/cipt-training) - privacy program and privacy technology training for data inventory, DPIA, retention, breach, and privacy engineering.\\n\\n### Phase 7: Detection, Incident Response, Forensics, Threat Intelligence, And Resilience\\n\\nGoal: detect, investigate, communicate, contain, recover, continue critical operations, and improve.\\n\\n#### Learn\\n\\n- Incident lifecycle: prepare, detect, analyze, contain, eradicate, recover, improve.\\n- Incident classification and categorization: severity, business impact, affected data, legal/regulatory triggers, escalation route.\\n- NIST SP 800-61r3 and NIST CSF 2.0 alignment.\\n- Alert triage: severity, confidence, affected assets, evidence, scope, false positives.\\n- Forensics basics: order of volatility, chain of custody, memory and disk imaging, timeline analysis, log preservation.\\n- Investigation types: administrative, HR, civil, criminal, regulatory, contractual, insurance, and industry-standard investigations.\\n- Legal handling: legal hold, privilege, regulator notification, law enforcement contact, evidence admissibility, documentation quality.\\n- Malware and ransomware: initial access, lateral movement, exfiltration, encryption, extortion, recovery.\\n- Threat intelligence: strategic, operational, tactical, technical.\\n- IoCs vs TTPs.\\n- MITRE ATT&CK, Diamond Model, Cyber Kill Chain.\\n- TLP, STIX/TAXII, ISACs, CERTs.\\n- Threat hunting: hypotheses, data sources, ATT&CK mapping.\\n- Business impact analysis: critical services, maximum tolerable downtime, RTO, RPO, dependencies, workarounds.\\n- Business continuity and disaster recovery: BCP, DRP, crisis management, recovery sites, alternate processing, manual fallback, supplier dependencies.\\n- Resilience testing: tabletop, walkthrough, simulation, parallel test, partial interruption, full interruption where appropriate.\\n- Crisis communication: legal, executive, customer, regulator, media, employee communication.\\n- Post-incident review: root cause, control failures, lessons, tracked remediation.\\n\\n#### Practice\\n\\n- Run a ransomware tabletop exercise.\\n- Run a BIA workshop for a critical service.\\n- Draft a BCP/DRP outline with RTO/RPO, dependencies, and exercise plan.\\n- Write an incident report.\\n- Build one Sigma-style detection rule.\\n- Map detection coverage to MITRE ATT&CK.\\n- Draft a communications plan for a major cyber incident.\\n- Create an investigation and evidence handling checklist.\\n\\n#### Deliverables\\n\\n- Incident response plan.\\n- Incident classification matrix.\\n- Ransomware playbook.\\n- Cloud credential compromise playbook.\\n- BIA and service dependency map.\\n- BCP/DRP outline.\\n- DR exercise plan.\\n- Investigation and evidence handling checklist.\\n- Threat intelligence requirements.\\n- Detection coverage map.\\n- Post-incident report template.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) - current authoritative incident response guide aligned to NIST CSF 2.0.\\n- Read: [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final) - practical forensic process reference for incident responders.\\n- Read: [MITRE ATT&CK](https://attack.mitre.org/), [MITRE ATT&CK Detection Engineering Training](https://attack.mitre.org/resources/learn-more-about-attack/training/detection-engineering/), and [FIRST TLP 2.0](https://www.first.org/tlp/) - standard language for adversary behavior, detections, and threat-intel sharing.\\n- Read: [NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) and [ISO 22301:2019](https://www.iso.org/standard/75106.html) - contingency planning, BIA, recovery, and business continuity references.\\n- Watch: [SANS DFIR](https://www.youtube.com/@SANSForensics) and [SANS STAR Live](https://www.sans.org/mlp/star-webcast) - strong DFIR, ransomware, evidence handling, threat analysis, and hunting material.\\n- Lab: [CyberDefenders Tracks](https://cyberdefenders.org/tracks/) and [Splunk Boss of the SOC v3](https://www.splunk.com/en-us/blog/security/botsv3-dataset-released.html) - structured DFIR, threat hunting, malware, cloud-forensics, and SOC investigation practice.\\n- Course: [MSB continuity management course](https://www.msb.se/sv/utbildning--ovning/alla-utbildningar/webbutbildning-om-kontinuitetshantering/) and [BCI CBCI Certification Course](https://www.thebci.org/certification-training/business-continuity-certification-cbci.html) - practical continuity, BIA, BCP, resilience, and recovery planning.\\n\\n### Phase 8: EU Regulation Stack\\n\\nGoal: understand which EU rules drive security obligations and how they overlap.\\n\\nLearn applicability, scope, obligations, authorities, reporting duties, evidence, sanctions, and supplier implications. Do not try to memorize every article.\\n\\n#### GDPR: Regulation `(EU) 2016/679`\\n\\n- Personal data processing.\\n- Controller, processor, sub-processor.\\n- Lawful basis, special categories, data subject rights.\\n- DPIA, ROPA, DPO.\\n- Personal data breach notification: normally 72 hours to supervisory authority when required.\\n- International transfers and Schrems II.\\n- Security of processing under Article 32.\\n\\n#### NIS2: Directive `(EU) 2022/2555`\\n\\n- Cybersecurity obligations for essential and important entities across 18 sectors.\\n- Management accountability and training.\\n- Risk-management measures.\\n- Incident reporting.\\n- Supply-chain security.\\n- Implemented in Sweden through Cybersäkerhetslag `(2025:1506)`.\\n\\n#### DORA: Regulation `(EU) 2022/2554`\\n\\n- Financial sector ICT risk management.\\n- ICT incident reporting.\\n- Digital operational resilience testing.\\n- Threat-led penetration testing for certain entities.\\n- ICT third-party risk.\\n- Oversight of critical ICT third-party providers.\\n\\n#### CER: Directive `(EU) 2022/2557`\\n\\n- Resilience of critical entities.\\n- Physical and organizational resilience sibling to NIS2.\\n- Covers hazards, terrorism, sabotage, insider threats, hybrid threats.\\n\\n#### Cyber Resilience Act: Regulation `(EU) 2024/2847`\\n\\n- Horizontal cybersecurity requirements for products with digital elements.\\n- Security-by-design, vulnerability handling, documentation, support periods, CE marking.\\n- Reporting obligations for actively exploited vulnerabilities and severe incidents apply from `2026-09-11`.\\n- General application from `2027-12-11`.\\n\\n#### AI Act: Regulation `(EU) 2024/1689`\\n\\n- Risk-based AI regulation.\\n- Prohibited practices and AI literacy obligations applied from `2025-02-02`.\\n- GPAI and governance provisions apply from `2025-08-02`.\\n- Most provisions apply from `2026-08-02`.\\n- Article 6(1) Annex I high-risk obligations apply from `2027-08-02`.\\n- Key concepts: prohibited AI, high-risk AI, transparency obligations, GPAI, systemic risk, conformity assessment, technical documentation, logging, human oversight, cybersecurity.\\n\\n#### eIDAS 2.0: Regulation `(EU) 2024/1183`\\n\\n- Electronic identification, trust services, EU Digital Identity Wallet.\\n- Relevant for identity, signatures, certificates, trust service providers, and cross-border digital identity.\\n\\n#### Data Act And Data Governance Act\\n\\n- Data sharing, IoT-generated data access, cloud switching, data intermediaries, data altruism.\\n- Relevant for IoT, cloud, SaaS, industrial data, and data portability.\\n\\n#### EU Cybersecurity Act `(EU) 2019/881`\\n\\n- ENISA mandate.\\n- European cybersecurity certification framework: EUCC, EUCS, and related schemes.\\n\\n#### Cyber Solidarity Act\\n\\n- Entered into force on `2025-02-04`.\\n- EU-level cyber preparedness, detection, response, Cybersecurity Alert System, and emergency mechanism.\\n\\n#### ePrivacy\\n\\n- Electronic communications confidentiality, cookies, tracking, traffic data.\\n- In Sweden, much of the practical context appears through LEK and PTS guidance.\\n\\n#### Overlap Examples\\n\\n- Bank: GDPR + DORA + NIS2/Cybersäkerhetslagen where applicable + ePrivacy/LEK + sector rules.\\n- Hospital: GDPR + NIS2 + CER + health-sector law + medical device regulation.\\n- Energy company: GDPR + NIS2 + CER + sector rules + often säkerhetsskydd.\\n- SaaS vendor of connected products: GDPR + CRA + customer-driven NIS2 requirements.\\n- AI-enabled connected device: GDPR + CRA + AI Act + RED/EN 18031 + sector-specific rules.\\n\\n#### Practice\\n\\n- Build an EU regulatory applicability matrix for a bank, hospital, energy company, SaaS provider, connected product manufacturer, and AI-enabled product.\\n- Compare incident reporting duties across GDPR, NIS2, DORA, CRA, and sector-specific rules for one scenario.\\n- Map one outsourced service to controller/processor roles, supplier obligations, incident reporting, evidence, and contractual security requirements.\\n- Create an obligation-to-evidence table for one EU regulation: scope trigger, required security measures, documentation, owner, authority, deadline, and supplier impact.\\n- Analyze one product or service where GDPR, CRA, AI Act, NIS2, and ePrivacy/LEK could overlap.\\n- Review one current EU guidance or authority page and update the applicability matrix with what changed.\\n\\n#### Deliverables\\n\\n- EU regulatory applicability matrix.\\n- Regulatory overlap map.\\n- NIS2/Cybersäkerhetslagen applicability memo.\\n- GDPR transfer assessment.\\n- CRA/AI Act/DORA relevance note.\\n- EU incident notification comparison table.\\n- Supplier obligation mapping.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), [eIDAS 2.0](https://eur-lex.europa.eu/eli/reg/2024/1183/oj), [Data Act](https://eur-lex.europa.eu/eli/reg/2023/2854/oj), and [Data Governance Act](https://eur-lex.europa.eu/eli/reg/2022/868/oj) - primary EU texts for privacy, digital identity, data sharing, and data intermediaries.\\n- Read: [NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), [CER](https://eur-lex.europa.eu/eli/dir/2022/2557/oj), [DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj), and [EU Cybersecurity Act](https://eur-lex.europa.eu/eli/reg/2019/881/oj) - primary EU cyber, resilience, financial-sector, and certification texts.\\n- Read: [Cyber Resilience Act](https://eur-lex.europa.eu/eli/reg/2024/2847/oj), [AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), and [ePrivacy Directive](https://eur-lex.europa.eu/eli/dir/2002/58/oj) - primary product cybersecurity, AI governance, and communications privacy sources.\\n- Watch: [ENISA NIS2 awareness videos](https://tools.enisa.europa.eu/topics/cybersecurity-education/awareness-campaigns/network-and-information-systems-directive-2-nis2), [European Commission AI Act webinar](https://digital-strategy.ec.europa.eu/en/events/webinar-exploring-architecture-ai-act), and [Digital EU](https://www.youtube.com/@DigitalEU) - official EU explanations of the regulatory stack.\\n- Course: [EIPA Cybersecurity Policies, Legislation and Practices in the EU](https://www.eipa.eu/courses/cybersecurity-policies-and-practices-in-the-eu-full-course/) - EU policy course covering GDPR, NIS2, DORA, CRA, and cybersecurity practice.\\n- Course: [IAPP CIPP/E](https://iapp.org/train/cippe-training/), [IAPP AIGP](https://iapp.org/train/aigp-training/), and [EU-SDFA DORA course](https://eusdfa.eui.eu/course/dora/) - specialist training for European privacy, AI governance, and financial ICT resilience.\\n\\n### Phase 9: Swedish Regulation And Authorities\\n\\nGoal: understand the Swedish legal and authority landscape that shapes security work.\\n\\n#### Cybersecurity\\n\\n- Cybersäkerhetslag `(2025:1506)`: Sweden's NIS2 implementation, in force from `2026-01-15`.\\n- Cybersäkerhetsförordning `(2025:1507)`.\\n- MCF, Myndigheten för civilt försvar, formerly MSB from `2026-01-01`, is central in civil defence and cybersecurity coordination.\\n- Incident reporting under cybersäkerhetslagen: early warning as soon as possible and no later than 24 hours after discovery; incident notification within 72 hours; final report within one month. Trusted service providers can have stricter 24-hour duties.\\n- Sectoral supervisory authorities vary by sector.\\n\\n#### Protective Security\\n\\n- Säkerhetsskyddslag `(2018:585)`.\\n- Säkerhetsskyddsförordning `(2021:955)`.\\n- PMFS `2022:1`: Säkerhetspolisen's protective security regulations.\\n- Försvarsmakten föreskrifter and KSF where defence or classified systems are relevant.\\n\\n#### Data Protection And Privacy\\n\\n- Dataskyddslag `(2018:218)`: Swedish law supplementing GDPR.\\n- Brottsdatalagen: law-enforcement data processing.\\n- Kamerabevakningslagen `(2018:1200)`.\\n- Patientdatalagen `(2008:355)` for healthcare.\\n- IMY guidance and decisions.\\n\\n#### Public Sector, Secrecy, And Records\\n\\n- Offentlighets- och sekretesslagen `(2009:400)`: secrecy and confidentiality in the public sector.\\n- Tryckfrihetsförordningen and Yttrandefrihetsgrundlagen: public access to official documents and constitutional media freedoms.\\n- Arkivlagen `(1990:782)`: public records retention.\\n- Public procurement rules and supplier security.\\n\\n#### Communications And Physical Protection\\n\\n- Lagen om elektronisk kommunikation `(2022:482)`: electronic communications, integrity, security, cookies/ePrivacy context.\\n- Skyddslagen `(2010:305)`: protected sites and objects.\\n- Lagen om totalförsvarsplikt `(1994:1809)`: total defence duty and war placement context.\\n- FRA-lagen and related signals-intelligence legislation for context, not ordinary organizational compliance.\\n\\n#### Criminal Law Context\\n\\n- Brottsbalken chapter 4: computer intrusion and unlawful interception context.\\n- Brottsbalken chapter 9: computer fraud.\\n- Brottsbalken chapter 19: offences against Sweden's security, espionage, unauthorized intelligence activities.\\n- Brottsbalken chapter 20: misconduct by public officials.\\n\\n#### Authorities To Know\\n\\n- MCF: civil defence, resilience, cybersecurity coordination, CERT-SE context.\\n- CERT-SE: national CSIRT.\\n- NCSC Sweden: national cyber security centre.\\n- Säkerhetspolisen: protective security, counter-intelligence, annual threat reporting.\\n- Försvarsmakten and MUST: military security and defence-sector protective security.\\n- FRA: signals intelligence and national cryptologic/information assurance role.\\n- FMV and CSEC: defence procurement and Common Criteria certification scheme.\\n- IMY: data protection authority.\\n- PTS: electronic communications and trust services.\\n- Finansinspektionen: financial sector and DORA.\\n- Energimyndigheten, Socialstyrelsen, Transportstyrelsen, Livsmedelsverket and others: sector regulators depending on scope.\\n- Riksrevisionen: state audit, including IT/security in public agencies.\\n- MPF: psychological defence and influence operations context.\\n\\n#### Practice\\n\\n- Build a Swedish legal applicability memo for a municipality, healthcare region, telecom operator, SaaS provider, energy company, and defence supplier.\\n- Create a Swedish authority and reporting matrix covering MCF/CERT-SE, IMY, PTS, Finansinspektionen, sector authorities, Säkerhetspolisen, and Försvarsmakten where relevant.\\n- Trace one incident from discovery to reporting and communication under Cybersäkerhetslagen, GDPR/Dataskyddslag, LEK, OSL, and säkerhetsskydd where applicable.\\n- Compare binding law, förordning, föreskrift, authority guidance, standard, contract, and sector practice for one security decision.\\n- Assess one public-sector service for OSL, Arkivlagen, procurement, GDPR, and supplier security implications.\\n- Read one Swedish authority guidance document and extract obligations, recommended controls, evidence, and owner roles.\\n\\n#### Deliverables\\n\\n- Swedish legal applicability memo.\\n- Swedish authority and reporting matrix.\\n- Cybersäkerhetslagen incident notification timeline.\\n- Sectoral supervisory authority map.\\n- OSL, Arkivlagen, and LEK applicability note.\\n- Public procurement and supplier security note.\\n- Authority guidance source map.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [Cybersäkerhetslag `(2025:1506)`](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/cybersakerhetslag-20251506_sfs-2025-1506/) and [Cybersäkerhetsförordning `(2025:1507)`](https://svenskforfattningssamling.se/doc/20251507.html) - primary Swedish NIS2 implementation texts.\\n- Read: [MSB/MCF metodstöd for systematic information security work](https://metodstod-informationssakerhet.msb.se/sv/) - practical Swedish authority guide for risk, gap analysis, controls, and systematic security work.\\n- Read: [IMY data protection guidance](https://www.imy.se/verksamhet/dataskydd/), [PTS security guidance](https://pts.se/sakerhet-och-integritet/vagledning-om-sakerhet-till-organisationer/), [OSL](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/offentlighets--och-sekretesslag-2009400_sfs-2009-400/), [Arkivlagen](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/arkivlag-1990782_sfs-1990-782/), and [LEK](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2022482-om-elektronisk-kommunikation_sfs-2022-482/) - privacy, communications, secrecy, and records sources.\\n- Watch: [MCF webinars on NIS2](https://www.mcf.se/sv/amnesomraden/informationssakerhet-och-cybersakerhet/krav-och-regler-inom-informationssakerhet-och-cybersakerhet/nis-direktivet/nis2/webbinarier-om-nis2/), [MCF Informationssäkerhet i fokus](https://www.mcf.se/sv/amnesomraden/informationssakerhet-och-cybersakerhet/kurser-och-natverk-inom-informationssakerhet/webbinarier/), and [IMY utbildningar och konferenser](https://www.imy.se/verksamhet/utbildning-och-stod/utbildningar-och-konferenser/) - official Swedish webinars and authority training.\\n- Course: [MSB/MCF courses in information security](https://www.mcf.se/sv/amnesomraden/informationssakerhet-och-cybersakerhet/kurser-och-natverk-inom-informationssakerhet/kurser-inom-informationssakerhet/) and [MSB DISA](https://www.msb.se/sv/utbildning--ovning/alla-utbildningar/datorstodd-informationssakerhetsutbildning-for-anvandare-disa/) - Swedish authority course hub and workplace awareness course.\\n- Course: [IFI NIS2 / Cybersäkerhetslagen](https://ifi.se/utbildning/nis2-cybersakerhetslagen-praktisk-tillampning-och-implementering/) and [BG Institute Cybersäkerhetslagen / NIS2](https://www.bginstitute.se/utbildning/cybersakerhetslagen-nu-genomfors-nis-2-i-svensk-ratt/) - practical Swedish implementation and legal training.\\n\\n### Phase 10: Säkerhetsskydd In Depth\\n\\nGoal: understand Sweden's protective security regime as its own discipline, not as ordinary cybersecurity.\\n\\n#### Core Concept\\n\\nSäkerhetsskydd protects:\\n\\n- Security-sensitive activities.\\n- Security-classified information.\\n- Objects, systems, facilities, and persons relevant to Sweden's security.\\n- Sweden's binding international protective-security obligations.\\n\\nThe trigger is not personal data or commercial harm. The trigger is relevance to Sweden's security or binding international obligations.\\n\\n#### Säkerhetsskyddsanalys\\n\\nThe cornerstone document. It identifies:\\n\\n- What in the operation is security-sensitive.\\n- What security-classified information exists.\\n- Threats and vulnerabilities.\\n- Consequences for Sweden's security.\\n- Required protective security measures.\\n- Supplier and outsourcing exposure.\\n- Personnel roles and security class placement.\\n\\nIt should be updated regularly and when operations change materially.\\n\\n#### Säkerhetsskyddsklassificering\\n\\nFour levels:\\n\\n1. Kvalificerat hemlig: exceptionally serious damage.\\n2. Hemlig: serious damage.\\n3. Konfidentiell: not insignificant damage.\\n4. Begränsat hemlig: minor damage.\\n\\nThis is distinct from OSL secrecy categories. Both regimes can apply.\\n\\n#### Protective Security Measures\\n\\n- Information security: handling, storage, transmission, crypto, access, system security.\\n- Physical security: areas, locks, guards, intrusion detection, zoning, facility controls.\\n- Personnel security: security vetting, register checks, training, ongoing suitability.\\n\\n#### Personnel Security\\n\\n- Säkerhetsprövning is continuous, not only at hiring.\\n- Security classes 1, 2, and 3 determine register check depth.\\n- Class 1 and 2 can involve special personal investigation.\\n- Follow-up conversations and changed-circumstance reporting matter.\\n\\n#### Säkerhetsskyddsavtal\\n\\nRequired when a supplier or partner may access security-sensitive activity or security-classified information.\\n\\nKnow:\\n\\n- SUA levels and access depth.\\n- Flow-down requirements to subcontractors.\\n- Supplier facility and personnel requirements.\\n- Audit rights.\\n- Handling of incidents and changes.\\n\\n#### Transfers, Outsourcing, And M&A\\n\\nCertain transfers, outsourcing, and cooperation involving security-sensitive activity require consultation with the supervisory authority and may be stopped.\\n\\n#### Practice\\n\\n- Perform a mock säkerhetsskyddsanalys for a fictional security-sensitive operation.\\n- Identify security-sensitive activity, security-classified information, consequences for Sweden's security, threats, vulnerabilities, and required protective measures.\\n- Classify example information into kvalificerat hemlig, hemlig, konfidentiell, begränsat hemlig, ordinary confidentiality, or not security-classified.\\n- Decide when a säkerhetsskyddsavtal is required for suppliers, subcontractors, consultants, cloud services, and outsourcing.\\n- Analyze one outsourcing, M&A, or cooperation scenario for consultation requirements, supplier exposure, foreign ownership/control, and residual risk.\\n- Build a practical handling flow for security-classified information: marking, storage, access, transmission, copying, destruction, and incident escalation.\\n\\n#### Deliverables\\n\\n- Säkerhetsskyddsanalys template.\\n- Security-classified information handling procedure.\\n- Security vetting process.\\n- Supplier/SUA decision checklist.\\n- Facility and access checklist.\\n- Security-sensitive outsourcing decision memo.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [Säkerhetsskyddslag `(2018:585)`](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sakerhetsskyddslag-2018585_sfs-2018-585/) and [Säkerhetsskyddsförordning `(2021:955)`](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sakerhetsskyddsforordning-2021955_sfs-2021-955/) - binding legal foundation for Swedish protective security.\\n- Read: [Säpo säkerhetsskyddsanalys](https://www.sakerhetspolisen.se/sakerhetsskydd/sakerhetsskyddsanalys.html) and [Säpo vägledningar säkerhetsskydd](https://www.sakerhetspolisen.se/sakerhetsskydd/vagledningar-sakerhetsskydd.html) - official guidance for the cornerstone analysis, classification, personnel security, and suppliers.\\n- Read: [PMFS 2022:1](https://sakerhetspolisen.se/download/18.650ed51617f9c29b5522c6/1649764927944/Sakerhetspolisens_foreskrifter_om_sakerhetsskydd_PMFS_2022_1.pdf), [Säpo PMFS 2022:1 revision notice](https://sakerhetspolisen.se/sakerhetsskydd/aktuellt-inom-sakerhetsskydd/sakerhetspolisen-reviderar-sina-foreskrifter-om-sakerhetsskydd-pmfs-20221.html), and [Försvarsmakten FFS 2025:3](https://www.forsvarsmakten.se/globalassets/02-om-forsvarsmakten/myndighetsinformation/dokument/lagrum/gallande-ffs-2014-/ffs-2025.3-om-sakerhetsskydd.pdf) - regulatory detail, including defence-sector rules and amendments.\\n- Watch: [Säkerhetspolisen informationsfilmer säkerhetsskydd](https://www.sakerhetspolisen.se/sakerhetsskydd/informationsfilmer-sakerhetsskydd.html) - official films on säkerhetsskyddsanalys, protective measures, dimensioning, physical security, and classified information.\\n- Course: [FHS Introduktion till säkerhetsskydd](https://www.fhs.se/utbildningar/introduktion-till-sakerhetsskydd.html) and [FHS Säkerhetsskydd - grundkurs digital](https://www.fhs.se/utbildningar/sakerhetsskydd---grundkurs-digital.html) - authoritative Swedish Defence University baseline courses.\\n- Course: [FHS Säkerhetsskyddsanalys](https://www.fhs.se/utbildningar/sakerhetsskyddsanalys---planera-leda-och-vidmakthalla.html), [FHS Säkerhetsskyddschef steg I](https://www.fhs.se/utbildningar/sakerhetsskyddschef---steg-i.html), and [MSB grundläggande säkerhetsskydd webbutbildning](https://www.msb.se/sv/utbildning--ovning/alla-utbildningar/ny-sidagrundlaggande-sakerhetsskyddsutbildning-via-webben/) - role-oriented training for analysis, governance, and implementation.\\n\\n### Phase 11: Offensive Security And Assurance\\n\\nGoal: understand attacker methods enough to test and improve defenses legally and safely.\\n\\n#### Learn\\n\\n- Legal authorization, written scope, rules of engagement.\\n- Vulnerability assessment vs penetration test vs red team vs purple team.\\n- Assessment strategy: internal, external, third-party, hybrid, cloud, product, process, and control testing scopes.\\n- Control testing methods: design effectiveness, operating effectiveness, sampling, log review, configuration review, interviews, evidence review.\\n- Reconnaissance, enumeration, exploitation basics, privilege escalation, lateral movement.\\n- Web, API, cloud, AD, wireless, and social engineering testing boundaries.\\n- PTES, OSSTMM, OWASP testing guidance.\\n- Adversary emulation and MITRE ATT&CK.\\n- Breach and attack simulation, purple-team validation, synthetic transactions, coverage analysis, and misuse-case testing.\\n- TIBER-EU for threat-led red teaming in finance.\\n- Reporting: executive summary, evidence, reproducibility, severity, business impact, remediation.\\n- Exceptions and risk acceptance: compensating controls, expiry dates, ownership, residual risk, remediation tracking.\\n\\n#### Practice\\n\\n- Use only controlled labs or authorized scopes.\\n- Write a professional report for a lab target.\\n- Convert findings into defensive detections and hardening actions.\\n- Draft rules of engagement.\\n- Build a control test plan for one ISO/NIST/CIS control family.\\n- Write one exception request with residual risk, compensating controls, owner, and expiry date.\\n\\n#### Deliverables\\n\\n- Rules of engagement template.\\n- Test plan.\\n- Control test plan.\\n- Finding template.\\n- Exception and risk-acceptance template.\\n- Remediation tracking sheet.\\n- Purple-team exercise report.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final) and [PTES](http://www.pentest-standard.org/index.php/Main_Page) - methodology anchors for security assessment planning, execution, evidence, and reporting.\\n- Read: [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) - canonical web and API testing guide for authorized application security assurance.\\n- Read: [MITRE ATT&CK adversary emulation plans](https://attack.mitre.org/resources/adversary-emulation-plans/) and [ECB TIBER-EU](https://www.ecb.europa.eu/paym/cyber-resilience/tiber-eu/html/index.en.html) - authoritative material for purple-team validation and European threat-led ethical red teaming.\\n- Watch: [Black Hat](https://www.youtube.com/@BlackHatOfficialYT), [DEF CON Conference](https://www.youtube.com/user/DEFCONConference), [MITRE ATT&CK Fundamentals Training](https://attack.mitre.org/resources/learn-more-about-attack/training/attack-fundamentals/), and [OWASP Foundation](https://www.youtube.com/@OWASPGLOBAL) - high-signal offensive research, adversary emulation, and testing talks.\\n- Lab: [PortSwigger Web Security Academy](https://portswigger.net/web-security), [Hack The Box Academy Penetration Tester](https://academy.hackthebox.com/path/preview/penetration-tester), and [TryHackMe Jr Penetration Tester](https://tryhackme.com/r/path/outline/jrpenetrationtester) - safe hands-on practice for web, network, privilege escalation, and reporting.\\n- Course: [OffSec PEN-200 / OSCP](https://www.offsec.com/courses/pen-200/), [SANS SEC560](https://www.sans.org/cyber-security-courses/enterprise-penetration-testing), and [SANS SEC542](https://www.sans.org/cyber-security-courses/web-app-penetration-testing-ethical-hacking) - widely recognized professional training for enterprise and web application testing.\\n\\n### Phase 12: Leadership, Strategy, And Soft Skills\\n\\nGoal: turn technical and legal knowledge into organizational impact.\\n\\n#### Security Strategy\\n\\n- One-year and three-year security strategy.\\n- Roadmap design.\\n- Budgeting and prioritization.\\n- Business cases for security investments.\\n- Resource planning: people, tools, services, suppliers, training, and operating capacity.\\n- Risk reduction vs compliance vs resilience vs business enablement.\\n- Security operating model: centralized, federated, embedded, champions networks.\\n- Maturity models and improvement planning.\\n- Integration with enterprise governance, portfolio management, procurement, legal, HR, IT operations, product development, and audit.\\n- Monitoring external change: threat landscape, technology change, regulatory change, business change, supplier change.\\n\\n#### Reporting And Metrics\\n\\n- Board-level cyber risk reporting.\\n- Executive one-page memos.\\n- Risk in business language.\\n- Metrics: coverage, control effectiveness, incident trends, patch SLAs, audit findings, training outcomes.\\n- Program communications: stakeholder maps, reporting cadence, decisions needed, escalations, and narrative for risk acceptance.\\n- Avoid vanity metrics.\\n\\n#### Soft Skills\\n\\n- Writing for executives: concise, concrete, decision-oriented.\\n- Writing for engineers: specific, actionable, testable standards.\\n- Facilitating risk workshops and threat modeling sessions.\\n- Negotiating with vendors, auditors, engineers, and business owners.\\n- Teaching and awareness.\\n- Legal fluency: ability to read laws, contracts, and regulator guidance.\\n- Bilingual capability in Sweden: Swedish for laws and authority guidance, English for standards and global threat intelligence.\\n- Operating under stress during incidents and crises.\\n- Maintaining professional judgment: ethics, independence, transparency about uncertainty, and escalation when risk is being hidden.\\n\\n#### Practice\\n\\n- Write a one-page executive risk memo with situation, options, recommendation, decision needed, and next step.\\n- Translate one technical finding into board-level risk language with business impact, uncertainty, options, and tradeoffs.\\n- Facilitate a mock risk or threat-modeling workshop and capture owners, decisions, deferred items, and follow-up actions.\\n- Build a business case for one security investment with cost, benefit, risk reduction, operational impact, and implementation dependencies.\\n- Present a metrics dashboard and explain which decisions the metrics support.\\n- Draft a crisis communication note for a major incident, including what is known, what is uncertain, what is being done, and who needs to decide.\\n- Negotiate a realistic remediation or supplier requirement tradeoff and document the accepted risk or revised plan.\\n\\n#### Deliverables\\n\\n- Security strategy.\\n- Business case for one security investment.\\n- Security operating model.\\n- Board report.\\n- Metrics dashboard.\\n- Stakeholder communication plan.\\n- Annual assurance plan.\\n- Crisis communication plan.\\n\\n#### Read / Watch / Courses\\n\\n- Read: [ISO/IEC 27014:2020](https://www.iso.org/standard/74046.html) - governance-of-information-security standard for leadership, direction, monitoring, and accountability.\\n- Read: [NISTIR 8286](https://www.nist.gov/publications/integrating-cybersecurity-and-enterprise-risk-management-erm-0), [NIST CSF 2.0](https://www.nist.gov/cyberframework), and [ENISA ECSF](https://www.enisa.europa.eu/topics/skills-and-competences/skills-development/european-cybersecurity-skills-framework-ecsf) - practical bridge between cyber strategy, enterprise risk, roles, skills, and operating models.\\n- Read: [NACD Director's Handbook on Cyber-Risk Oversight](https://www.nacdonline.org/globalassets/public-pdfs/nacd_cyber-risk-oversight-handbook_pages_web-compressed.pdf), [WEF Principles for Board Governance of Cyber Risk](https://www.weforum.org/publications/principles-for-board-governance-of-cyber-risk/), and [UK NCSC Board Toolkit](https://www.ncsc.gov.uk/collection/board-toolkit) - board-level cyber-risk oversight and reporting guidance.\\n- Read: [How to Measure Anything in Cybersecurity Risk](https://books.google.com/books/about/How_to_Measure_Anything_in_Cybersecurity.html?id=AwD0BgAAQBAJ) - strong reference for metrics, uncertainty, business cases, and investment decisions.\\n- Watch: [CISA Live](https://www.cisa.gov/cisa-live), [NACD Director's Handbook on Cyber-Risk Oversight](https://www.nacdonline.org/all-governance/governance-resources/governance-research/director-handbooks/2026-cyber-risk-oversight/), and [FAIR Institute board cyber-risk oversight](https://www.fairinstitute.org/blog/video-how-boards-exercise-proper-cyber-risk-oversight-tips-for-directors-at-the-2020-fair-conference) - executive-facing material on cyber resilience, risk oversight, and board communication.\\n- Course: [Microsoft CISO Workshop](https://learn.microsoft.com/en-gb/security/adoption/ciso-workshop), [SANS LDR512](https://www.sans.org/cyber-security-courses/security-leadership-essentials-managers/), and [SANS LDR514](https://www.sans.org/cyber-security-courses/strategic-security-planning-policy-leadership) - structured leadership, strategy, maturity, metrics, policy, and operating-model training.\\n- Course: [ISACA CISM online review courses](https://www.isaca.org/training-and-events/online-training/online-review-courses) and [Cybersecurity for Business Specialization](https://www.coursera.org/specializations/cyber-security-business) - management-oriented material for governance, risk, security program leadership, and executive translation.\\n\\n## 3. Specializations\\n\\nSpecializations are deeper tracks built on the Core Curriculum. Each track is split into chapters so you can study it incrementally instead of treating the whole domain as one large block.\\n\\nEach specialization chapter follows the same structure:\\n\\n- Learn: concepts, standards, technologies, and judgement areas.\\n- Practice: labs, exercises, reviews, and scenario work.\\n- Deliverables: concrete evidence you can produce.\\n- Read / Watch / Courses: source material and training routes.\\n\\n### Track A.1: Embedded R&D Foundations And Threat Model\\n\\nGoal: understand why embedded security differs from normal IT, cloud, and application security.\\n\\n#### Learn\\n\\n- Physical-adversary assumptions: bought devices, opened enclosures, exposed debug pads, firmware extraction, probing, glitching, and reverse engineering.\\n- Embedded constraints: RAM, CPU, battery, bandwidth, timing, storage, bill-of-materials cost, and field-service limitations.\\n- Long product lifecycles and crypto-agility needs for 10-25 year products.\\n- Safety, real-time, and mixed-criticality constraints: when a security control can break determinism, safety cases, or certification claims.\\n- Lifecycle phases: concept, development, manufacturing, provisioning, deployment, maintenance, vulnerability handling, and decommissioning.\\n- Manufacturing risk: factory access, test firmware, debug unlock paths, per-device secrets, certificates, HSM-backed provisioning, and production audit logs.\\n\\n#### Practice\\n\\n- Threat model a small connected embedded product across development, manufacturing, field operation, and end of life.\\n- Identify assets, trust boundaries, attackers, debug paths, update paths, secrets, and safety-relevant failure modes.\\n- Compare two mitigation choices where cost, battery, timing, or RAM constraints change the decision.\\n- Review one product teardown or firmware-analysis report and extract the embedded-specific lessons.\\n\\n#### Deliverables\\n\\n- Embedded product threat model.\\n- Lifecycle security responsibility matrix.\\n- Physical attacker assumptions note.\\n- Manufacturing and provisioning risk checklist.\\n- Embedded security requirements baseline.\\n\\n#### Read / Watch / Courses\\n\\n- Book: The Hardware Hacking Handbook.\\n- Book: Practical IoT Hacking.\\n- Standards: IEC 62443-4-1 and IEC 62443-4-2 for secure product development and component requirements.\\n- Reference: Trusted Computing Group DICE and TPM 2.0 material for device identity patterns.\\n- Course/lab: ChipWhisperer introductory labs for physical attack intuition.\\n\\n### Track A.2: Hardware Roots Of Trust, Secure Boot, And Provisioning\\n\\nGoal: design a trustworthy boot and identity chain from silicon to fleet operation.\\n\\n#### Learn\\n\\n- Roots of trust: TPM 2.0, fTPM, secure elements, MCU/SoC HSMs, hardware unique keys, PUFs, OTP memory, fuses, lifecycle states, and TRNGs.\\n- Secure elements and HSM examples: Microchip ATECC608, NXP SE050/EdgeLock, Infineon OPTIGA, NXP S32 HSE, Infineon AURIX HSM, Renesas ICU-S.\\n- Secure boot patterns: boot ROM, verified boot, measured boot, authenticated boot, encrypted boot, rollback protection, and recovery modes.\\n- Named flows worth recognizing: MCUboot, Trusted Firmware-M, U-Boot verified boot, UEFI Secure Boot, Android Verified Boot, ESP32 Secure Boot v2, NXP HAB/AHAB, Nordic secure boot.\\n- Update frameworks and manifest models: TUF, Uptane, SUIT, signed manifests, A/B partitions, atomic updates, staged rollout, and key rotation.\\n- Provisioning and onboarding: per-device keys, EST, BRSKI, FIDO Device Onboard, audit logs, certificate issuance, revocation, and field enrollment.\\n\\n#### Practice\\n\\n- Build or inspect a signed firmware update flow for an MCU or embedded Linux target.\\n- Draw the trust chain from boot ROM to application to update service.\\n- Write an anti-rollback and recovery strategy for failed updates.\\n- Review a provisioning flow and identify where secrets can leak or be cloned.\\n\\n#### Deliverables\\n\\n- Secure boot and update design.\\n- Firmware signing key hierarchy.\\n- Provisioning sequence diagram.\\n- Debug and lifecycle lock-down checklist.\\n- Key compromise and fleet recovery playbook.\\n\\n#### Read / Watch / Courses\\n\\n- MCUboot documentation.\\n- Trusted Firmware-M documentation.\\n- U-Boot verified boot documentation.\\n- RFC 9124 SUIT manifest, RFC 8995 BRSKI, RFC 7030 EST, RFC 9334 RATS.\\n- Vendor security manuals for one target MCU or SoC family.\\n\\n### Track A.3: Embedded OS, Isolation, Communications, And Crypto\\n\\nGoal: secure the runtime, communication channels, and cryptographic choices for constrained and Linux-class devices.\\n\\n#### Learn\\n\\n- RTOS and embedded OS choices: FreeRTOS, Zephyr, ThreadX, VxWorks, QNX, Integrity, PikeOS, RTEMS, NuttX.\\n- Embedded Linux hardening: Yocto/OpenEmbedded, Buildroot, read-only root filesystems, dm-verity, IMA/EVM, SELinux/AppArmor, seccomp, namespaces, capabilities.\\n- Isolation primitives: MPU, MMU, IOMMU/SMMU, TrustZone-A, TrustZone-M, OP-TEE, TF-M, hypervisors, separation kernels, and mixed-criticality partitioning.\\n- Local and field interfaces: UART, SPI, I2C, CAN, LIN, BLE, Wi-Fi, cellular, LoRaWAN, Modbus, DNP3, OPC UA, PROFINET, EtherCAT.\\n- Embedded crypto: AES-GCM/CCM, ChaCha20-Poly1305, SHA-2/SHA-3, Ed25519, X25519, ECDSA P-256, HKDF, HMAC, PSA Crypto API, mbedTLS, wolfSSL.\\n- Constrained communication security: TLS 1.3, DTLS 1.3, OSCORE, EDHOC, PSK tradeoffs, certificate validation, replay protection, and downgrade resistance.\\n- PQC planning for long-lived products: ML-KEM, ML-DSA, SLH-DSA, LMS/XMSS, hybrid schemes, firmware-signature size, RAM, and verification cost.\\n\\n#### Practice\\n\\n- Harden a minimal embedded Linux image and document what remains writable and executable.\\n- Compare TLS, DTLS, OSCORE, and EDHOC for one constrained device scenario.\\n- Review a crypto API use and identify key storage, randomness, nonce, and error-handling risks.\\n- Build a simple communication threat model for a device, gateway, and cloud service.\\n\\n#### Deliverables\\n\\n- Runtime isolation design.\\n- Embedded Linux hardening checklist.\\n- Communication security decision record.\\n- Crypto-agility and PQC migration note.\\n- Interface exposure inventory.\\n\\n#### Read / Watch / Courses\\n\\n- Zephyr security documentation.\\n- Yocto Project security and reproducible-build guidance.\\n- RFC 9147 DTLS 1.3, RFC 8613 OSCORE, RFC 9528 EDHOC.\\n- PSA Crypto API documentation.\\n- NIST FIPS 203, 204, 205 and NIST SP 800-208 for PQC and hash-based signatures.\\n\\n### Track A.4: Embedded Assurance, Physical Attacks, And Field Lifecycle\\n\\nGoal: verify embedded security and prepare for field failures, vulnerability handling, and end-of-support risk.\\n\\n#### Learn\\n\\n- Memory-safety risks in C/C++: buffer overflow, use-after-free, integer overflow, format strings, races, uninitialized memory, TOCTOU.\\n- Secure coding standards and hardening: MISRA C/C++, CERT C/C++, AUTOSAR C++14, stack protector, FORTIFY, NX/W^X, ASLR where possible, CFI, PAC, MTE.\\n- Analysis and testing: static analysis, fuzzing, HIL testing, negative tests, update interruption, downgrade attempts, lifecycle-transition tests.\\n- Physical attacks: side channels, timing, power analysis, EM analysis, cache channels, voltage glitching, clock glitching, EMFI, laser fault injection.\\n- Tool families: ChipWhisperer, oscilloscopes, EM probes, logic analyzers, JTAGulator, Bus Pirate, Saleae, Ghidra, IDA, Binary Ninja, binwalk, QEMU, Renode.\\n- Vulnerability operations: coordinated disclosure, SBOM, dependency monitoring, field telemetry, support lifetime, end-of-life notification.\\n\\n#### Practice\\n\\n- Run a firmware extraction or static firmware-analysis exercise on a benign sample.\\n- Fuzz one parser, protocol handler, or update component.\\n- Create tests for update interruption, rollback, corrupted manifests, and debug interface access.\\n- Write a disclosure and end-of-support plan for a long-lived product.\\n\\n#### Deliverables\\n\\n- Firmware analysis report.\\n- Embedded assurance test plan.\\n- Physical attack risk assessment.\\n- Vulnerability handling process for embedded products.\\n- End-of-support and decommissioning plan.\\n\\n#### Read / Watch / Courses\\n\\n- SEI CERT C and CERT C++ Coding Standards.\\n- Ghidra, binwalk, Renode, and ChipWhisperer tutorials.\\n- Hardwear.io and DEF CON Hardware Hacking Village talks.\\n- PSA Certified and SESIP overview material.\\n- Book: Embedded Software Development for Safety-Critical Systems.\\n\\n### Track B.1: AI Governance, Inventory, And Risk Model\\n\\nGoal: know what AI systems exist, what they do, who owns them, and which legal/security obligations apply.\\n\\n#### Learn\\n\\n- AI system inventory fields: use case, owner, model provider, model version, base model, fine-tuning data, RAG corpus, prompts, tools, guardrails, monitoring, logging, retention, and human oversight.\\n- AI supply chain: base model, model host, fine-tuning data, embeddings, vector database, prompt templates, tools, plugins, MCP servers, agents, framework, runtime, and cloud platform.\\n- AI-specific risk: probabilistic behavior, non-determinism, emergent capability, data as program, model as egress channel, training-data memorization, and autonomy compounding errors.\\n- Governance frameworks: NIST AI RMF, ISO/IEC 42001, ISO/IEC 23894, MITRE ATLAS, OWASP LLM and Agentic guidance.\\n- Legal context: GDPR, DPIA, automated decision-making, EU AI Act risk classification, transparency, logging, human oversight, and cybersecurity expectations.\\n- Swedish ecosystem context: AI Sweden, RISE, WASP, universities, banks, telecom, automotive, defence, health, and public-sector AI use.\\n\\n#### Practice\\n\\n- Inventory five AI use cases in a real or hypothetical organization.\\n- Classify each by business criticality, data sensitivity, autonomy, user exposure, and legal risk.\\n- Map one use case to NIST AI RMF categories and EU AI Act questions.\\n- Write a short AI acceptable-use policy for employees and developers.\\n\\n#### Deliverables\\n\\n- AI system inventory.\\n- AI risk classification memo.\\n- AI acceptable-use policy.\\n- AI governance RACI.\\n- DPIA trigger checklist for AI systems.\\n\\n#### Read / Watch / Courses\\n\\n- NIST AI RMF 1.0 and NIST Generative AI Profile.\\n- ISO/IEC 42001 and ISO/IEC 23894 overviews.\\n- EU AI Act official text and European Commission summaries.\\n- MITRE ATLAS.\\n- Course: DeepLearning.AI AI governance and responsible AI material.\\n\\n### Track B.2: LLM, RAG, And Application Security\\n\\nGoal: secure LLM applications where prompts, retrieval, users, data, and application logic interact.\\n\\n#### Learn\\n\\n- LLM application threats: direct prompt injection, indirect prompt injection, jailbreaks, prompt extraction, sensitive disclosure, insecure output handling, hallucination risk, denial-of-wallet, and token exhaustion.\\n- RAG threats: malicious documents, embedding poisoning, authorization bypass in retrieval, cross-tenant leakage, stale or over-retained data, re-ranker manipulation, and PII in embeddings.\\n- Control principles: model output is untrusted input, enforce authorization in code, do not place secrets in prompts, validate structured output, separate trusted and untrusted content, and preserve source provenance.\\n- Guardrails and validation: schema validation, allowlisted actions, output encoding, content filters, retrieval filters, source labels, budget controls, rate limits, and abuse monitoring.\\n- Logging tradeoffs: prompt/version, retrieved chunks, model version, tool calls, decision points, privacy controls, and retention.\\n- Data protection: lawful basis, purpose separation, training versus inference, embeddings as personal data when derived from personal data, and deletion strategy limitations.\\n\\n#### Practice\\n\\n- Build a toy RAG system and attack it with malicious retrieved content.\\n- Implement per-user authorization in retrieval and verify cross-tenant isolation.\\n- Test prompt injection, prompt extraction, and unsafe output handling.\\n- Add structured-output validation and logging that avoids leaking secrets or unnecessary personal data.\\n\\n#### Deliverables\\n\\n- LLM/RAG threat model.\\n- RAG authorization and data-flow diagram.\\n- Prompt and response logging decision record.\\n- RAG security checklist.\\n- LLM application abuse test report.\\n\\n#### Read / Watch / Courses\\n\\n- OWASP Top 10 for LLM Applications.\\n- OWASP Agentic AI threats and mitigations.\\n- Microsoft AI red-team and PyRIT material.\\n- Promptfoo and Garak documentation.\\n- Book: Generative AI Security.\\n\\n### Track B.3: Agentic Systems, Tools, MCP, And Automation Boundaries\\n\\nGoal: design agent systems that can use tools without gaining unsafe authority.\\n\\n#### Learn\\n\\n- Agent risk patterns: excessive agency, tool misuse, confused deputy, identity abuse, goal manipulation, cascading failures, memory poisoning, insecure inter-agent communication, and insufficient observability.\\n- Capability minimization: smallest tool set, per-tool permissions, scoped credentials, short-lived delegated tokens, human approval for irreversible or external-facing actions.\\n- Trusted/untrusted separation: do not let untrusted content directly steer privileged planning; isolate retrieval, browsing, execution, and communication paths.\\n- Planner/executor split, action preview, approval checkpoints, reversible action ordering, step budgets, termination conditions, and fail-safe defaults.\\n- MCP and tool ecosystems: servers expose tools/resources/prompts; tool descriptions influence behavior; local and networked servers have different risk profiles.\\n- Dangerous combinations: untrusted content, private data, and ability to communicate externally in the same agent loop.\\n\\n#### Practice\\n\\n- Build a small tool-using agent with read-only, write, and external-communication tools separated by permission.\\n- Review one MCP server or plugin manifest for scope, descriptions, secrets, and network behavior.\\n- Add a human approval gate before destructive, costly, external, legal, financial, or safety-relevant actions.\\n- Run an agent red-team scenario where a malicious document attempts to trigger tool misuse.\\n\\n#### Deliverables\\n\\n- Agent permission matrix.\\n- Tool and MCP server review checklist.\\n- Agent action approval workflow.\\n- Agentic threat model.\\n- Agent audit-log design.\\n\\n#### Read / Watch / Courses\\n\\n- OWASP Agentic Applications Top 10 and Agentic Skills Top 10.\\n- MCP specification and security guidance from official project documentation.\\n- Simon Willison writing on agent/tool risk patterns.\\n- AgentDojo and AgentBench research for evaluation ideas.\\n- Course/lab: build a small agent and red-team its tool permissions.\\n\\n### Track B.4: MLSecOps, AI Red Teaming, Privacy, And Assurance\\n\\nGoal: test, monitor, and govern AI systems through deployment and change.\\n\\n#### Learn\\n\\n- MLSecOps lifecycle: data lineage, dataset versions, model artifacts, prompt versions, evaluation suites, deployment gates, rollback, prompt patching, model swaps, and provider outage playbooks.\\n- AI evaluation beyond accuracy: robustness, privacy, harmful outputs, abuse, fairness, tool misuse, and operational cost anomalies.\\n- Attack categories: adversarial examples, evasion, poisoning, backdoors, model extraction, membership inference, model inversion, attribute inference, and training-data extraction.\\n- Red-team tools: Garak, PyRIT, Promptfoo, ART, Foolbox, CleverHans, TextAttack, PrivacyRaven, Opacus, TensorFlow Privacy, MCP Inspector.\\n- Guardrail approaches: NeMo Guardrails, Guardrails AI, Llama Guard, ShieldGemma, Prompt Guard, Microsoft Presidio for PII detection.\\n- Provenance and watermarking limits: C2PA, SynthID, public watermarking approaches, evasion risk, and why watermarking is not a complete assurance control.\\n\\n#### Practice\\n\\n- Run automated and manual red-team tests against one LLM or RAG demo.\\n- Create an evaluation suite for prompt injection, unsafe output, sensitive disclosure, and tool misuse.\\n- Test membership-inference or adversarial examples on a small ML model.\\n- Write an AI incident response addendum for prompt attack, data leak, model outage, and unsafe tool execution.\\n\\n#### Deliverables\\n\\n- AI red-team report.\\n- AI evaluation plan.\\n- AI incident response addendum.\\n- Model/prompt change-control record.\\n- AI monitoring and rollback playbook.\\n\\n#### Read / Watch / Courses\\n\\n- NIST adversarial machine learning taxonomy.\\n- MITRE ATLAS case studies.\\n- Carlini et al. work on memorization and training-data extraction.\\n- Microsoft PyRIT documentation and examples.\\n- Conferences: OWASP GenAI, AI Village, Black Hat/DEF CON AI security talks.\\n\\n### Track C.1: Defence Industry, Säkerhetsskydd, And Threat Context\\n\\nGoal: understand defence suppliers, classified projects, national security, and advanced threat environments.\\n\\n#### Learn\\n\\n- Swedish defence ecosystem: Försvarsmakten, FMV, FOI, FRA, MUST, Säkerhetspolisen, MCF, Försvarshögskolan, MPF, SOFF, and defence suppliers.\\n- Säkerhetsskydd concepts in defence: security-sensitive activity, security-classified information, protective security analysis, security measures, and security protection agreements.\\n- Threat model: foreign intelligence services, insiders, supply-chain compromise, influence operations, export-control exposure, and long-lived program sensitivity.\\n- Classification and handling: Swedish security classifications, NATO context, need-to-know, marking, handling, storage, transfer, and destruction.\\n- Sweden's NATO context and how NATO collaboration changes industrial security expectations.\\n- Swedish defence industry examples: Saab, Combitech, Sectra, BAE Systems Hägglunds/Bofors, GKN Aerospace, Volvo Defense, Aimpoint, Norma, Tutus, Advenica, Truesec.\\n\\n#### Practice\\n\\n- Run a mock säkerhetsskyddsanalys for a defence supplier project.\\n- Identify which project assets, systems, people, facilities, suppliers, and information flows may become security-sensitive.\\n- Create a classification decision memo for a fictional defence collaboration.\\n- Draft a supplier onboarding checklist for a security-sensitive project.\\n\\n#### Deliverables\\n\\n- Defence säkerhetsskyddsanalys outline.\\n- Security classification memo.\\n- Supplier security onboarding checklist.\\n- Project security responsibility map.\\n- Defence threat brief.\\n\\n#### Read / Watch / Courses\\n\\n- Säkerhetsskyddslag and säkerhetsskyddsförordning.\\n- Säkerhetspolisen vägledningar on säkerhetsskydd.\\n- Försvarsmakten open publications on säkerhetsskydd.\\n- MCF/MSB material on information security and civil defence.\\n- Försvarshögskolan public lectures and courses where relevant.\\n\\n### Track C.2: Classified Systems, KSF, COMSEC, TEMPEST, And High Assurance\\n\\nGoal: understand security expectations for classified or high-assurance defence systems.\\n\\n#### Learn\\n\\n- KSF and Swedish defence system authorization context.\\n- COMSEC and cryptographic-material handling: custody, approved products, keying material, rotation, destruction, and incident handling.\\n- TEMPEST/EMSEC: red/black separation, zoning, shielding, filtering, grounding, and operational leakage risks.\\n- High-assurance architecture: multilevel security, guards, cross-domain solutions, data diodes, separation kernels, Bell-LaPadula, Biba, and trusted paths.\\n- Evaluation and assurance: Common Criteria, CCRA, SOG-IS, EUCC, CSEC, FIPS 140-3, secure hardware certifications, and evidence expectations.\\n- Classified collaboration environments: secure rooms, approved communications, removable media control, logging, and administrative separation.\\n\\n#### Practice\\n\\n- Map a classified information flow and identify red/black boundaries.\\n- Design a simple cross-domain information-sharing pattern and list the assurance questions it raises.\\n- Compare a normal enterprise architecture review with a classified-system authorization review.\\n- Build a checklist for removable media and admin access in a high-assurance environment.\\n\\n#### Deliverables\\n\\n- Classified system security concept.\\n- Red/black separation diagram.\\n- COMSEC responsibility checklist.\\n- Cross-domain solution risk memo.\\n- High-assurance evidence checklist.\\n\\n#### Read / Watch / Courses\\n\\n- KSF v3.1 where accessible and relevant.\\n- NATO security policy open material.\\n- Common Criteria / ISO/IEC 15408 overview.\\n- FIPS 140-3 overview material.\\n- Public material from CSEC, SOG-IS, and ENISA certification pages.\\n\\n### Track C.3: Defence Suppliers, Export Control, NATO, And Counterintelligence\\n\\nGoal: manage supplier, legal, personnel, and international collaboration risks in defence industry work.\\n\\n#### Learn\\n\\n- Supplier flow-down: security requirements, subcontractors, access control, audit rights, incident notification, classification handling, and project closure.\\n- SUA and security-protection agreements in practice.\\n- Export control: krigsmateriel, dual-use goods, EU Dual-Use Regulation, sanctions, Wassenaar context, ITAR/EAR exposure, and technology-transfer risk.\\n- NATO industrial security concepts and program-specific security instructions.\\n- Personnel security: security vetting, registerkontroll, continuing suitability, travel security, insider threat, and foreign intelligence targeting.\\n- Crisis and incident communication in defence contexts: customer, authority, supplier, media, and employee communication constraints.\\n\\n#### Practice\\n\\n- Build an export-control trigger checklist for a technical project.\\n- Draft supplier flow-down clauses for a classified collaboration.\\n- Run a tabletop where a supplier loses security-classified information.\\n- Write a travel-security and foreign-contact briefing for staff in a sensitive project.\\n\\n#### Deliverables\\n\\n- Defence supplier security plan.\\n- Export-control trigger checklist.\\n- Supplier flow-down requirements.\\n- Insider and counterintelligence awareness checklist.\\n- Classified collaboration incident playbook.\\n\\n#### Read / Watch / Courses\\n\\n- ISP material on krigsmateriel and dual-use products.\\n- Säpo annual reports for threat context.\\n- FOI publications where relevant.\\n- SOFF events and defence-industry material.\\n- Tallinn Manual 2.0 as context for international law in cyberspace.\\n\\n### Track D.1: IoT Product Architecture, Regulation, And Risk\\n\\nGoal: secure connected products across device, connectivity, cloud, application, support, and lifecycle.\\n\\n#### Learn\\n\\n- IoT categories: consumer IoT, enterprise IoT, industrial IoT, critical IoT, medical/health IoT, and defence-adjacent IoT.\\n- Architecture tiers: device, connectivity, gateway, cloud/application, mobile/web, support, manufacturing, and fleet operations.\\n- Threat boundaries: hostile local network, device-to-cloud, gateway-to-cloud, cloud-to-user, cloud-to-cloud, mobile-to-cloud, manufacturing-to-fleet.\\n- Regulation and standards: Cyber Resilience Act, Radio Equipment Directive delegated cybersecurity requirements, EN 18031, GDPR, NIS2/Cybersäkerhetslagen, ETSI EN 303 645, NISTIR 8259/8425, IEC 62443 for IIoT.\\n- Common IoT pitfalls: default credentials, no update mechanism, unsigned updates, hardcoded keys, weak randomness, poor certificate validation, open debug interfaces, weak mobile apps, and insecure cloud APIs.\\n- Privacy risks: always-on sensing, location, behavioral inference, children/household data, telemetry retention, and edge processing tradeoffs.\\n\\n#### Practice\\n\\n- Draw an end-to-end IoT architecture for a device, mobile app, cloud backend, update service, support portal, and manufacturing environment.\\n- Map the architecture against CRA, ETSI EN 303 645, and NISTIR 8259 requirements.\\n- Identify privacy risks from telemetry and write minimization controls.\\n- Review a consumer IoT vulnerability report and map findings to lifecycle controls.\\n\\n#### Deliverables\\n\\n- IoT architecture and trust-boundary diagram.\\n- CRA/ETSI/NIST control mapping.\\n- IoT privacy and telemetry checklist.\\n- Product security risk register.\\n- IoT threat model.\\n\\n#### Read / Watch / Courses\\n\\n- ETSI EN 303 645 and TS 103 701.\\n- NISTIR 8259 Rev. 1 and NISTIR 8425.\\n- EU Cyber Resilience Act summaries and official text.\\n- EN 18031 series overview material.\\n- Book: Practical IoT Hacking.\\n\\n### Track D.2: IoT Identity, Provisioning, Attestation, And Communication\\n\\nGoal: design device identity and trust at fleet scale.\\n\\n#### Learn\\n\\n- Unique per-device identity using X.509 certificates, mTLS, secure elements, TPMs, DICE, hardware unique keys, and cloud IoT identity services.\\n- Provisioning options: factory provisioning, first-boot enrollment, EST, BRSKI, FIDO Device Onboard, OPC UA onboarding, AWS IoT Core, Azure IoT Hub DPS, Eclipse Hono.\\n- Attestation: local and remote attestation, nonce/quote patterns, TPM quotes, DICE, RATS, EAT, firmware measurement, configuration measurement, and cloud verification.\\n- Communication security: TLS 1.3, DTLS 1.3, OSCORE, EDHOC, MQTT over TLS, AMQP over TLS, CoAP security, certificate validation, rotation, and revocation.\\n- Fleet-scale identity risk: shared credentials, cloned devices, leaked manufacturing keys, weak enrollment authorization, and poor revocation.\\n- Cellular IoT considerations: NB-IoT, LTE-M, eSIM, iSIM, USIM identity, PLMN restrictions, IMEI blocklists, and anomaly detection.\\n\\n#### Practice\\n\\n- Design a per-device identity and provisioning sequence for 10,000 devices.\\n- Implement or mock mTLS between a device and cloud broker.\\n- Write an attestation verification flow for expected firmware state.\\n- Create a revocation and device-quarantine process for suspected cloned devices.\\n\\n#### Deliverables\\n\\n- Device identity architecture.\\n- Provisioning sequence diagram.\\n- Attestation evidence flow.\\n- Fleet revocation and quarantine plan.\\n- Secure communication baseline.\\n\\n#### Read / Watch / Courses\\n\\n- RFC 9334 RATS architecture and Entity Attestation Token material.\\n- RFC 8995 BRSKI and RFC 7030 EST.\\n- Cloud provider IoT identity documentation.\\n- GSMA eSIM remote SIM provisioning overview for cellular IoT context.\\n- OPC UA security and onboarding material.\\n\\n### Track D.3: IoT Updates, Cloud Backends, Mobile Apps, And Fleet Operations\\n\\nGoal: secure the operational systems that keep connected products alive after launch.\\n\\n#### Learn\\n\\n- Update mechanisms: signed updates, anti-rollback, recovery, staged rollout, A/B partitions, TUF, Uptane, SUIT, Mender, RAUC, SWUpdate.\\n- Cloud control plane risks: device registry, command APIs, OTA service, telemetry pipeline, customer portal, support tooling, and administrative actions.\\n- Mobile and web app risks: API authorization, token storage, insecure pairing, weak tenant separation, and excessive device-control permissions.\\n- Fleet monitoring: device health, update success, certificate expiry, anomalous command patterns, telemetry privacy, and abuse detection.\\n- Vulnerability operations: disclosure policy, intake, triage, coordinated disclosure, patch communication, support lifetime, and end-of-life risk.\\n- Cloud compromise to fleet compromise: OTA signing, command channels, enrollment systems, and support accounts as high-impact paths.\\n\\n#### Practice\\n\\n- Build an update threat model and test failed update, rollback, corrupt manifest, expired certificate, and interrupted power scenarios.\\n- Map all cloud roles that can issue device commands or initiate firmware rollout.\\n- Review a mobile app API for authorization and tenant separation risks.\\n- Draft an end-of-life communication and cloud shutdown plan.\\n\\n#### Deliverables\\n\\n- Secure update architecture.\\n- Fleet monitoring and alerting plan.\\n- Cloud-to-device command authorization matrix.\\n- Vulnerability disclosure and support lifetime policy.\\n- End-of-life and decommissioning plan.\\n\\n#### Read / Watch / Courses\\n\\n- TUF, Uptane, and SUIT documentation.\\n- Mender, RAUC, and SWUpdate project documentation.\\n- OWASP MASVS and API Security Top 10.\\n- Cloud provider IoT security reference architectures.\\n- DEF CON IoT Village talks.\\n\\n### Track D.4: Industrial IoT, OT Interfaces, And Cyber-Physical Safety\\n\\nGoal: understand where IoT meets industrial control, safety, and critical infrastructure.\\n\\n#### Learn\\n\\n- IIoT versus traditional OT: sensors, gateways, edge compute, cloud analytics, remote maintenance, industrial 5G, and TSN.\\n- Purdue model basics: Level 0-3 control environments, industrial DMZ, enterprise boundary, and controlled data flow.\\n- Protocol characteristics: Modbus, DNP3, IEC 60870-5-104, IEC 61850, PROFINET, EtherCAT, OPC UA, S7, and security add-ons.\\n- IEC 62443 roles and concepts: asset owner, integrator, product supplier, service provider, zones, conduits, SL0-SL4, FR1-FR7.\\n- OT visibility and segmentation: passive monitoring, vendor remote access, jump servers, time-bounded access, session recording, and unidirectional gateways.\\n- Safety and availability constraints: why patching, scanning, and response can be operational projects rather than routine IT actions.\\n\\n#### Practice\\n\\n- Build a small Purdue-style architecture diagram for an IIoT deployment.\\n- Walk through an IEC 62443-3-2 style risk assessment for one zone.\\n- Design a vendor remote access pattern for an industrial gateway.\\n- Map one OT incident scenario to detection, containment, and regulatory reporting.\\n\\n#### Deliverables\\n\\n- IIoT/OT architecture diagram.\\n- IEC 62443 zone-and-conduit assessment.\\n- Vendor remote access procedure.\\n- OT incident response scenario.\\n- Industrial telemetry risk memo.\\n\\n#### Read / Watch / Courses\\n\\n- NIST SP 800-82r3 Guide to Operational Technology Security.\\n- IEC 62443 overview material.\\n- MITRE ATT&CK for ICS.\\n- Dragos Year in Review reports.\\n- Courses: SANS ICS410/ICS515 or ISA/IEC 62443 fundamentals.\\n\\n### Track E.1: Automotive Cybersecurity Management, Standards, And Regulation\\n\\nGoal: understand vehicles as safety-critical, connected, regulated cyber-physical systems.\\n\\n#### Learn\\n\\n- Automotive constraints: functional safety culture, long development cycles, long service life, fleet scale, supplier depth, type approval, OTA, and software-defined vehicles.\\n- Standards and regulation: UN R155, UN R156, ISO/SAE 21434, ISO 24089, ISO/PAS 5112, ISO/SAE 8475, ISO 26262, ISO 21448 SOTIF, AUTOSAR security documents.\\n- ISO/SAE 21434 structure: organizational cybersecurity management, project-dependent management, distributed activities, continual activities, concept, development, validation, production, operations, maintenance, and end of cybersecurity support.\\n- CSMS and SUMS evidence expectations for market access.\\n- Supplier interfaces: cybersecurity interface agreements, out-of-context development, component assumptions, evidence packages, and vulnerability handling.\\n- Swedish automotive context: Volvo Cars, Volvo Group, Scania, Polestar, CEVT, Autoliv, Einride, Lindholmen, and the Gothenburg/Södertälje supplier ecosystem.\\n\\n#### Practice\\n\\n- Map ISO/SAE 21434 work products for one ECU or connected vehicle feature.\\n- Build a CSMS evidence checklist for a fictional project.\\n- Review how UN R155 and R156 obligations map to engineering and operations.\\n- Draft a supplier cybersecurity interface agreement outline.\\n\\n#### Deliverables\\n\\n- Automotive cybersecurity management map.\\n- ISO/SAE 21434 evidence checklist.\\n- CSMS/SUMS responsibility matrix.\\n- Supplier cybersecurity interface agreement outline.\\n- Swedish automotive ecosystem map.\\n\\n#### Read / Watch / Courses\\n\\n- ISO/SAE 21434 overview material and official standard where available.\\n- UNECE Regulation No. 155 and No. 156.\\n- ISO 24089 overview material.\\n- AUTO-ISAC best practice guides.\\n- Conference: escar Europe talks and proceedings.\\n\\n### Track E.2: TARA, Vehicle Architecture, And Attack Paths\\n\\nGoal: analyze vehicle cybersecurity risk from architecture to attack feasibility.\\n\\n#### Learn\\n\\n- TARA steps: assets, cybersecurity properties, threat scenarios, impact ratings, attack paths, attack feasibility, risk, treatment, cybersecurity goals, and claims.\\n- Vehicle architectures: domain architecture, zonal architecture, central compute, gateways, ECUs, sensors, actuators, telematics, infotainment, diagnostics, OTA, and mobile/cloud ecosystem.\\n- Networks and protocols: CAN, CAN-FD, LIN, FlexRay, MOST, Automotive Ethernet, SOME/IP, DoIP, UDS.\\n- Attack-path thinking: infotainment to gateway, telematics to vehicle network, mobile app to cloud to vehicle, diagnostics misuse, OTA compromise, and supplier update-chain compromise.\\n- Impact categories: safety, financial, operational, privacy, legal/regulatory, and fleet-wide reputational impact.\\n- Relationship between ISO/SAE 21434, ISO 26262, and SOTIF in system-level decisions.\\n\\n#### Practice\\n\\n- Perform a TARA for a telematics control unit or OTA update path.\\n- Draw an attack path from mobile account compromise to vehicle control risk.\\n- Rate attack feasibility using knowledge, expertise, equipment, time, and opportunity.\\n- Convert TARA results into cybersecurity goals and technical requirements.\\n\\n#### Deliverables\\n\\n- Automotive TARA.\\n- Vehicle attack-path diagram.\\n- Cybersecurity goals and claims.\\n- ECU cybersecurity requirements.\\n- TARA-to-test traceability matrix.\\n\\n#### Read / Watch / Courses\\n\\n- ISO/SAE 21434 TARA sections.\\n- ISO/PAS 5112 audit guidance overview.\\n- The Car Hacker's Handbook.\\n- Practical Vehicle Cybersecurity.\\n- Car Hacking Village talks and labs.\\n\\n### Track E.3: In-Vehicle Security, OTA, Diagnostics, And V2X\\n\\nGoal: secure the technical mechanisms inside and around the vehicle.\\n\\n#### Learn\\n\\n- Automotive HSMs: SHE, EVITA, HSE/ICU-S equivalents, secure key storage, secure counters, and crypto services.\\n- SecOC: authenticated messages, freshness values, MACs, key management, and replay protection.\\n- AUTOSAR Classic and Adaptive security: identity, communication protection, platform security, IdsM, IdsR, and diagnostics integration.\\n- Diagnostics: UDS, SecurityAccess, Authentication Service 0x29, DoIP, secure service access, repair workflows, and right-to-repair tension.\\n- OTA security: signed manifests, A/B, rollback protection, campaign management, safety preconditions, recovery, and software bill of materials.\\n- V2X and charging: IEEE 1609.2, ETSI TS 103 097, SCMS/CCMS, pseudonym certificates, misbehavior detection, OCPP, ISO 15118.\\n\\n#### Practice\\n\\n- Design a secure diagnostic access model with roles, authentication, and audit logging.\\n- Review an OTA update sequence for rollback, bricking, campaign authorization, and safety preconditions.\\n- Map SecOC assumptions for one message family.\\n- Threat model an EV charging or V2X scenario.\\n\\n#### Deliverables\\n\\n- Diagnostic security checklist.\\n- OTA security checklist.\\n- In-vehicle key management note.\\n- SecOC requirements outline.\\n- V2X or charging threat model.\\n\\n#### Read / Watch / Courses\\n\\n- AUTOSAR security documentation.\\n- ISO 24089 software update engineering material.\\n- UNECE R156.\\n- ISO 15118 and OCPP security summaries.\\n- escar, Auto-ISAC, and Car Hacking Village technical talks.\\n\\n### Track E.4: VSOC, Fleet Operations, Cloud, And Supplier Response\\n\\nGoal: operate automotive cybersecurity after vehicles are in the field.\\n\\n#### Learn\\n\\n- VSOC sources: ECU IDS events, telematics, mobile app logs, OEM cloud logs, OTA campaign data, diagnostics, service portals, and supplier reports.\\n- Detection engineering: anomalous diagnostics, suspicious OTA behavior, unusual vehicle-to-cloud patterns, account takeover, mobile abuse, and fleet-wide indicators.\\n- Incident response: vehicle safety decisions, fleet containment, supplier coordination, authority communication, customer communication, and forensic preservation.\\n- Coordinated disclosure and vulnerability handling across OEMs, Tier 1s, Tier 2s, consultants, and security researchers.\\n- Cloud/vehicle boundary: vehicle identity, cloud identity, mobile identity, supplier identity, OTA signing, and administrative separation.\\n- Privacy: driver behavior, location, biometrics, infotainment data, charging data, and retention decisions.\\n\\n#### Practice\\n\\n- Build a VSOC detection coverage map for a connected vehicle feature.\\n- Run a tabletop where a supplier component vulnerability affects a fleet.\\n- Draft customer and authority communication for a connected-vehicle incident.\\n- Map privacy controls for vehicle telemetry and driver monitoring.\\n\\n#### Deliverables\\n\\n- VSOC detection coverage map.\\n- Automotive incident response playbook.\\n- Supplier vulnerability coordination plan.\\n- Vehicle telemetry privacy checklist.\\n- Fleet containment decision memo.\\n\\n#### Read / Watch / Courses\\n\\n- Auto-ISAC best practices.\\n- ENISA and NHTSA vehicle cybersecurity publications.\\n- OEM coordinated disclosure examples.\\n- Practical Vehicle Cybersecurity.\\n- Talks from escar Europe and S4/ICS events where vehicle systems overlap with cyber-physical operations.\\n\\n### Track F.1: Cloud Architecture, Shared Responsibility, And Identity\\n\\nGoal: design cloud foundations where identity, tenancy, guardrails, and responsibility are explicit.\\n\\n#### Learn\\n\\n- Service models: IaaS, PaaS, SaaS, serverless, managed databases, managed Kubernetes, managed AI platforms, and how responsibility shifts.\\n- Deployment models: public, private, hybrid, multi-cloud, sovereign cloud, community cloud, and disconnected environments.\\n- Landing zones: organizations, management groups, accounts, subscriptions, projects, folders, tenants, policy inheritance, guardrails, and account vending.\\n- Environment separation: production, staging, development, sandbox, shared services, security tooling, and break-glass access.\\n- Identity: federation, SSO, MFA, phishing-resistant authentication, conditional access, IAM roles, service principals, managed identities, workload identity federation, PAM, JIT/JEA, and permission boundaries.\\n- Non-human identity: service accounts, CI/CD identities, workload identities, SPIFFE/SPIRE, short-lived credentials, secrets management, and detection of NHI compromise.\\n\\n#### Practice\\n\\n- Design a landing zone for one cloud provider with management, network, logging, security, and application accounts/subscriptions/projects.\\n- Build a shared responsibility matrix for IaaS, PaaS, SaaS, and managed Kubernetes.\\n- Inventory human and non-human identities in one environment.\\n- Replace one long-lived secret with a short-lived or federated identity pattern.\\n\\n#### Deliverables\\n\\n- Cloud landing zone design.\\n- Shared responsibility matrix.\\n- Cloud IAM model.\\n- Non-human identity inventory.\\n- Privileged access and break-glass procedure.\\n\\n#### Read / Watch / Courses\\n\\n- AWS Well-Architected Security Pillar.\\n- Microsoft Cloud Security Benchmark.\\n- Google Cloud security foundations blueprint.\\n- NIST SP 800-207 Zero Trust Architecture.\\n- CSA Cloud Controls Matrix and CCSK material.\\n\\n### Track F.2: Cloud Network, Data Protection, KMS, And Sovereignty\\n\\nGoal: protect data and exposure across cloud services, regions, networks, and jurisdictions.\\n\\n#### Learn\\n\\n- Network patterns: hub-and-spoke, transit gateways, virtual WAN, service endpoints, private endpoints, controlled egress, DNS filtering, ingress controllers, WAF, API gateways, DDoS protection, and ZTNA.\\n- Exposure management: public IPs, storage buckets, databases, container registries, SaaS sharing links, AI endpoints, secrets, and admin portals.\\n- Data protection: classification, data-flow mapping, storage permissions, object versioning, retention locks, database auditing, row/column controls, backup, restore testing, and ransomware recovery.\\n- Encryption and key management: KMS, HSM, BYOK, HYOK, customer-managed keys, key rotation, separation of duties, private PKI, mTLS, tokenization, pseudonymization, and anonymization.\\n- Data residency and sovereignty: region selection, cross-border transfers, support access, telemetry, logs, backups, subprocessors, lawful access, and concentration risk.\\n- Swedish and EU context: GDPR, NIS2/Cybersäkerhetslagen, DORA, CER, AI Act, OSL, and säkerhetsskydd depending on sector and data.\\n\\n#### Practice\\n\\n- Build a cloud data-flow diagram for one application with data stores, logs, backups, and support access.\\n- Review public exposure in a cloud or SaaS tenant.\\n- Design key ownership and rotation for a sensitive dataset.\\n- Write a cloud outsourcing/supplier risk memo for regulated or security-sensitive data.\\n\\n#### Deliverables\\n\\n- Cloud network segmentation design.\\n- Data-flow and residency map.\\n- Key management and encryption design.\\n- Cloud exposure assessment.\\n- Cloud supplier and sovereignty risk memo.\\n\\n#### Read / Watch / Courses\\n\\n- ISO/IEC 27017 and ISO/IEC 27018 overviews.\\n- CIS Benchmarks for AWS, Azure, Google Cloud, Kubernetes, Linux, and Windows.\\n- Provider documentation for private endpoints, KMS/HSM, logging, and storage controls.\\n- ENISA cloud and supply-chain publications.\\n- Course: provider security specialty training for one cloud platform.\\n\\n### Track F.3: Cloud Workloads, Containers, DevSecOps, IaC, And SaaS\\n\\nGoal: secure what runs in the cloud and how it is delivered.\\n\\n#### Learn\\n\\n- Workload security: hardened images, patching, vulnerability scanning, endpoint/workload protection, runtime detection, EDR/CWPP, and rebuild-from-trusted-source patterns.\\n- Container security: image minimization, scanning, signing, SBOM, provenance, admission control, registry access, runtime detection, and supply-chain integrity.\\n- Kubernetes security: RBAC, namespace isolation, network policies, pod security, secrets, API server security, audit logging, service mesh, mTLS, and multi-tenancy.\\n- Serverless and managed services: permissions, event-source security, isolation assumptions, dependency risk, logging, and managed AI platform configuration.\\n- DevSecOps and IaC: Terraform, Bicep, CloudFormation, Pulumi, Helm, Kustomize, GitOps, IaC scanning, policy-as-code, protected branches, runner isolation, least-privilege deployment roles, secret scanning, and drift detection.\\n- SaaS security: inventory, SSO, SCIM, tenant baselines, external sharing, admin roles, audit logs, OAuth consent, retention, eDiscovery, integrations, exit plans, and SSPM/CASB patterns.\\n\\n#### Practice\\n\\n- Harden a Kubernetes namespace and document RBAC, network policy, pod security, and secrets handling.\\n- Add IaC scanning, secret scanning, and signed artifact provenance to a CI/CD workflow.\\n- Review SaaS tenant settings for SSO, external sharing, audit logs, and admin roles.\\n- Create a policy-as-code rule that prevents public storage or overly broad IAM.\\n\\n#### Deliverables\\n\\n- Container/Kubernetes security checklist.\\n- IaC guardrail and policy-as-code set.\\n- CI/CD deployment identity model.\\n- SaaS security baseline.\\n- Cloud supply-chain risk assessment.\\n\\n#### Read / Watch / Courses\\n\\n- Kubernetes security documentation and OWASP Kubernetes Top 10.\\n- SLSA, in-toto, Sigstore, Cosign, CycloneDX, and SPDX documentation.\\n- CIS Benchmarks for Kubernetes and cloud platforms.\\n- Provider DevSecOps and workload identity documentation.\\n- CNCF cloud-native security whitepapers.\\n\\n### Track F.4: Cloud Detection, Response, Governance, And Assurance\\n\\nGoal: operate cloud security with evidence, detection, response, and compliance that matches cloud speed.\\n\\n#### Learn\\n\\n- Log sources: identity, control plane, data plane, DNS, network flow, firewall, WAF, endpoint, container, Kubernetes, storage, database, SaaS audit logs, CI/CD, and managed AI platforms.\\n- Security tooling categories: CSPM, CNAPP, CWPP, CIEM, SSPM, CASB, DSPM, SIEM, SOAR, EDR, and cloud-native detections.\\n- Detection scenarios: suspicious API calls, public exposure, privilege escalation, impossible travel, consent abuse, key creation, crypto-mining, mass data access, compromised CI/CD runners, and SaaS data leakage.\\n- Cloud incident response: exposed storage, leaked keys, compromised admin account, ransomware, image rebuilds, snapshotting, evidence preservation, account quarantine, key rotation, and redeployment from trusted IaC.\\n- Governance and assurance: cloud control ownership, risk register, audit evidence, SOC 2/ISAE reports, supplier review, incident notification, exit assistance, concentration risk, and resilience testing.\\n- FinOps and security tradeoffs: logging cost, retention, regional replication, backup cost, reserved capacity, and cost-abuse detection.\\n\\n#### Practice\\n\\n- Build a detection coverage map for one cloud environment.\\n- Write runbooks for exposed storage, leaked keys, compromised admin, and compromised CI/CD runner.\\n- Collect audit evidence for a small cloud control set.\\n- Run a cloud incident tabletop with legal, communications, engineering, and management roles.\\n\\n#### Deliverables\\n\\n- Cloud logging and detection coverage map.\\n- Cloud incident runbooks.\\n- Evidence automation plan.\\n- Cloud control mapping to ISO/NIST/CSA/CIS.\\n- Cloud resilience and concentration-risk memo.\\n\\n#### Read / Watch / Courses\\n\\n- CSA Cloud Controls Matrix.\\n- CIS Controls and CIS Benchmarks.\\n- Provider incident response and logging guidance.\\n- SANS cloud forensics and cloud security talks.\\n- Course: CCSP, CCSK, or provider security specialty depending on role.\\n\\n### Track G.1: Telecom Architecture, Standards, And Swedish Context\\n\\nGoal: understand telecommunications infrastructure, standards bodies, operator responsibilities, and the Swedish telecom ecosystem.\\n\\n#### Learn\\n\\n- Telecom architecture layers: RAN, core, transport, OSS/BSS, service platforms, subscriber systems, roaming, lawful interception, and customer-facing channels.\\n- Mobile generations: 2G/GSM, 3G/UMTS, 4G/LTE, 5G NSA, 5G SA, and early 6G research.\\n- 4G LTE elements: eNodeB, MME, SGW, PGW, HSS, PCRF, IMS, and Diameter signaling.\\n- 5G core service-based architecture: NRF, AMF, SMF, UPF, AUSF, UDM, NEF, PCF, NSSF, SEPP, and network exposure patterns.\\n- Standards ecosystem: 3GPP SA3, GSMA NESAS/SCAS/FS.31, ITU-T SG17, ETSI, IETF, ENISA, and operator security forums.\\n- Swedish context: Ericsson, Telia, Tele2, Telenor Sverige, Tre, PTS, Kista telecom security ecosystem, Ericsson Research, KTH/LiU telecom research, FOI/Saab defence-side telecom relevance.\\n- Regulatory context: LEK, PTS supervision, NIS2/Cybersäkerhetslagen, säkerhetsskydd in sensitive operator contexts, EU 5G Toolbox, ePrivacy, lawful interception, and data retention.\\n\\n#### Practice\\n\\n- Draw a high-level Swedish mobile operator architecture with RAN, transport, core, OSS/BSS, SOC, roaming, and external interfaces.\\n- Read a 3GPP SA3 security architecture overview and identify the major security domains.\\n- Map a telecom service against LEK, PTS supervision, and NIS2/Cybersäkerhetslagen applicability.\\n- Compare telecom availability expectations with normal enterprise IT recovery expectations.\\n\\n#### Deliverables\\n\\n- Telecom architecture diagram.\\n- Telecom standards map.\\n- LEK/NIS2 applicability memo.\\n- Swedish telecom ecosystem map.\\n- Operator responsibility and authority matrix.\\n\\n#### Read / Watch / Courses\\n\\n- 3GPP TS 33.501 and TS 33.401 overviews.\\n- GSMA NESAS, SCAS, and FS.31 material.\\n- ENISA 5G Threat Landscape and 5G Supply Chain reports.\\n- PTS guidance on electronic communications security and LEK.\\n- Ericsson Technology Review and GSMA security publications.\\n\\n### Track G.2: 5G Security, Slicing, MEC, And Open RAN\\n\\nGoal: understand the security properties and weak points of modern 5G architectures.\\n\\n#### Learn\\n\\n- 5G security concepts: SUCI, SUPI protection, 5G-AKA, EAP-AKA', AUSF, UDM, SEPP, SBA security, service authorization, and HTTP/2/TLS between network functions.\\n- Network slicing: slice isolation, NSSF role, shared infrastructure risk, assurance evidence, tenant boundaries, and operational failure modes.\\n- Multi-access edge computing: MEC placement, local breakout, edge application trust, API exposure, tenant isolation, latency-sensitive controls, and cloud-edge operations.\\n- RAN security: gNodeB, CU/DU split, fronthaul/midhaul/backhaul security, synchronization risk, physical site exposure, and RAN management.\\n- Open RAN: O-RAN interfaces, near-real-time RIC, xApps/rApps, supply-chain expansion, multivendor assurance, and integration risk.\\n- Roaming security: SS7, Diameter, SEPP, IPX providers, inter-PLMN trust, fraud exposure, and roaming-partner incident coordination.\\n- Security assurance: NESAS, SCAS, vendor hardening, configuration baselines, product security incident response, and supply-chain geopolitics.\\n\\n#### Practice\\n\\n- Draw security boundaries for a 5G network slice or MEC deployment.\\n- Build a threat model for one 5G slice that supports a critical IoT or public-sector workload.\\n- Review Open RAN threat surfaces and identify which controls belong to vendor, integrator, and operator.\\n- Walk through a roaming signaling abuse scenario and identify detection and coordination needs.\\n\\n#### Deliverables\\n\\n- 5G slice security boundary diagram.\\n- MEC threat model.\\n- Open RAN risk register.\\n- Roaming abuse scenario.\\n- 5G assurance evidence checklist.\\n\\n#### Read / Watch / Courses\\n\\n- 3GPP TS 33.501.\\n- ENISA Security in 5G Specifications.\\n- GSMA NESAS and SCAS documentation.\\n- O-RAN Alliance security publications.\\n- Books: LTE Security and 5G Mobile Networks: A Systems Approach.\\n\\n### Track G.3: Operator Security Operations, Fraud, BGP, DNS, And Roaming\\n\\nGoal: operate telecom security across network operations, internet routing, fraud, and incident coordination.\\n\\n#### Learn\\n\\n- NetSOC and operator SOC models: network alarms, control-plane telemetry, signaling events, BGP/DNS events, customer abuse, fraud, lawful-interception constraints, and regulator reporting.\\n- Fraud types: SIM box, subscription fraud, roaming fraud, IRSF, Wangiri, SMS abuse, smishing infrastructure, and premium-rate abuse.\\n- BGP security: route leaks, hijacks, RPKI, route filtering, MANRS, peering policy, DDoS rerouting, and incident coordination.\\n- DNS security: DNSSEC, resolver abuse, DoH/DoT tradeoffs, domain abuse, sinkholing, cache poisoning, and telecom-scale resolver operations.\\n- DDoS and availability: volumetric attacks, mobile packet core impact, DNS impact, customer-facing mitigation, scrubbing centers, and critical-service prioritization.\\n- Roaming and partner coordination: IPX providers, interconnect trust, abuse signals, contract obligations, evidence exchange, and escalation paths.\\n- Incident communication: PTS, CERT-SE/MCF, customers, enterprise clients, roaming partners, vendors, media, and legal functions.\\n\\n#### Practice\\n\\n- Build a telecom detection coverage map for BGP, DNS, fraud, DDoS, and signaling abuse.\\n- Walk through one route hijack and one DNS incident affecting an operator.\\n- Draft a fraud escalation workflow from detection to customer action and partner communication.\\n- Run a tabletop for a combined DDoS and roaming abuse incident.\\n\\n#### Deliverables\\n\\n- Network SOC detection coverage map.\\n- BGP and DNS security baseline.\\n- Telecom fraud response workflow.\\n- Roaming incident coordination playbook.\\n- PTS/CERT-SE notification decision tree.\\n\\n#### Read / Watch / Courses\\n\\n- MANRS and RIPE routing security material.\\n- ICANN, IETF, and DNS-OARC material on DNS security.\\n- GSMA fraud and security resources.\\n- ENISA telecom threat landscape material.\\n- RIPE and DEF CON Telecom Village talks.\\n\\n### Track G.4: Cellular IoT, Private Networks, And Telecom Supply Chain\\n\\nGoal: secure cellular-connected products, private networks, and telecom supplier dependencies.\\n\\n#### Learn\\n\\n- Cellular IoT: NB-IoT, LTE-M, eSIM, iSIM, remote SIM provisioning, SGP.31/SGP.32, APNs, private APNs, network restrictions, IMEI controls, and anomaly detection.\\n- Device-to-operator-to-cloud identity: USIM identity, device certificate identity, cloud identity, ownership transfer, lifecycle events, and decommissioning.\\n- Private mobile networks: industrial 5G, campus networks, public-sector deployments, spectrum, operator-managed services, vendor-managed services, and local breakout.\\n- Telecom cloudification: virtualized network functions, CNFs, Kubernetes, cloud-native packet core, CI/CD, image provenance, and NFV orchestration.\\n- Supplier risk: vendor concentration, software update channels, managed services, integration partners, lawful-interception vendors, OSS/BSS suppliers, and geopolitical restrictions.\\n- Regulation overlap: LEK, NIS2/Cybersäkerhetslagen, CRA for connected products, RED delegated acts, GDPR/ePrivacy, säkerhetsskydd where networks support security-sensitive activity.\\n\\n#### Practice\\n\\n- Design a cellular IoT identity and provisioning flow for devices using eSIM/iSIM and cloud onboarding.\\n- Threat model a private 5G network used in manufacturing, transport, or public safety.\\n- Review a telecom supplier chain and identify high-impact update, support, and management dependencies.\\n- Write security requirements for a cellular connectivity supplier.\\n\\n#### Deliverables\\n\\n- Cellular IoT identity architecture.\\n- Private 5G threat model.\\n- Telecom supplier risk assessment.\\n- Cellular connectivity security requirements.\\n- Telecom lifecycle and decommissioning checklist.\\n\\n#### Read / Watch / Courses\\n\\n- GSMA eSIM and remote SIM provisioning material.\\n- GSMA IoT Security Guidelines.\\n- NIST SP 800-187 Guide to LTE Security.\\n- ENISA 5G supply-chain material.\\n- Ericsson, Nokia, and cloud-provider telecom security architecture material.\\n\\n### Track H.1: OT/ICS Foundations, Purdue, And Safety Constraints\\n\\nGoal: understand operational technology as a safety- and availability-driven security domain.\\n\\n#### Learn\\n\\n- OT/ICS scope: PLCs, RTUs, IEDs, SCADA, HMIs, engineering workstations, historians, safety instrumented systems, DCS, BMS, and industrial networks.\\n- Why OT differs: availability and safety first, long equipment life, deterministic control, limited maintenance windows, vendor dependency, fragile legacy protocols, and physical consequences.\\n- Purdue model: levels 0-5, industrial DMZ at level 3.5, controlled data flows, and modern deviations caused by cloud, IIoT, and remote operations.\\n- Safety and process context: when security action can create downtime, unsafe states, environmental harm, equipment damage, or loss of life.\\n- Attack history: Stuxnet, Industroyer, Triton/Trisis, Industroyer2, FrostyGoop, ransomware against plants and utilities, and cloud-to-operations incidents.\\n- Swedish sectors: energy, water, transport, manufacturing, mining, process industry, ports, buildings, and critical societal activity.\\n- Regulation context: NIS2/Cybersäkerhetslagen, CER, sectoral supervision, MSB/MCF, IEC 62443, and security protection where operations are security-sensitive.\\n\\n#### Practice\\n\\n- Draw a Purdue-style architecture for a small plant, utility, railway, or building automation environment.\\n- Identify which assets are safety-critical, availability-critical, and business-critical.\\n- Compare an IT incident response action with its OT operational constraints.\\n- Read one public OT incident report and extract technical, process, and governance lessons.\\n\\n#### Deliverables\\n\\n- OT/ICS architecture map.\\n- Safety and availability assumptions note.\\n- Critical OT asset list.\\n- OT incident case-study summary.\\n- OT regulatory applicability memo.\\n\\n#### Read / Watch / Courses\\n\\n- NIST SP 800-82r3 Guide to Operational Technology Security.\\n- IEC 62443 overview material.\\n- Dragos Year in Review reports.\\n- SANS ICS publications and webcasts.\\n- Books: Industrial Network Security and Hacking Exposed Industrial Control Systems.\\n\\n### Track H.2: Industrial Protocols, Asset Inventory, And Visibility\\n\\nGoal: understand OT communication patterns and build visibility without creating operational risk.\\n\\n#### Learn\\n\\n- Industrial protocols: Modbus, DNP3, IEC 60870-5-104, IEC 61850, PROFINET, EtherCAT, OPC UA, Siemens S7/S7CommPlus, BACnet, MQTT, and vendor-specific protocols.\\n- Protocol security characteristics: authentication gaps, encryption gaps, replay risk, command semantics, timing requirements, and partial adoption of secure variants.\\n- OT asset inventory fields: vendor, model, firmware, function, criticality, owner, location, network segment, process dependency, lifecycle status, support contract, and known vulnerabilities.\\n- Passive monitoring: span/TAP architecture, protocol decoding, baseline communication patterns, asset fingerprinting, and detection of engineering activity.\\n- Active scanning risks: fragile devices, safety impact, network saturation, unauthorized writes, and need for maintenance windows.\\n- OT visibility tools: Dragos, Nozomi Networks, Claroty, Tenable OT, Forescout, Armis, vendor engineering tools, and SIEM integration.\\n\\n#### Practice\\n\\n- Build an OT asset inventory for a fictional or lab process.\\n- Compare passive and active discovery for the same OT environment and document risk.\\n- Map protocol flows between engineering workstation, HMI, PLC, historian, and enterprise systems.\\n- Build a vulnerability triage example where patching is delayed and compensating controls are needed.\\n\\n#### Deliverables\\n\\n- OT asset inventory.\\n- Protocol flow diagram.\\n- Passive monitoring design.\\n- OT vulnerability triage memo.\\n- Compensating-control plan.\\n\\n#### Read / Watch / Courses\\n\\n- MITRE ATT&CK for ICS.\\n- Vendor protocol security documentation for OPC UA, DNP3 Secure Authentication, IEC 62351, and PROFINET security classes.\\n- Dragos and Nozomi research reports.\\n- SANS ICS visibility and monitoring material.\\n- Sigrok/Wireshark protocol-analysis resources where relevant.\\n\\n### Track H.3: IEC 62443, Segmentation, Remote Access, And Conduits\\n\\nGoal: design OT security architecture using zones, conduits, roles, and operationally realistic control patterns.\\n\\n#### Learn\\n\\n- IEC 62443 structure: 1-x concepts, 2-x asset-owner and service-provider management, 3-x system risk and requirements, 4-x secure product development and component requirements.\\n- IEC 62443 roles: asset owner, system integrator, product supplier, maintenance provider, and managed service provider.\\n- Security levels: SL0-SL4, target security level, achieved security level, and why level claims must be tied to zones and conduits.\\n- Functional requirements FR1-FR7: identification/authentication, use control, system integrity, data confidentiality, restricted data flow, timely response, and resource availability.\\n- Segmentation patterns: industrial DMZ, firewalls, unidirectional gateways/data diodes, jump servers, remote access brokers, microsegmentation, and protocol-aware controls.\\n- Vendor remote access: MFA, approval workflow, time-bounded sessions, session recording, command restrictions, emergency access, and revocation.\\n- Change and patch management: maintenance windows, vendor validation, rollback plans, safety approval, spare parts, and end-of-life controls.\\n\\n#### Practice\\n\\n- Perform an IEC 62443-3-2 style risk assessment for one zone.\\n- Design zones and conduits for a small OT architecture with enterprise, DMZ, SCADA, PLC, and vendor access.\\n- Write a vendor remote access procedure and test its approval and logging requirements.\\n- Build a patch decision record where operational risk requires compensating controls.\\n\\n#### Deliverables\\n\\n- IEC 62443 zone-and-conduit assessment.\\n- OT segmentation design.\\n- Vendor remote access procedure.\\n- OT patch and compensating-control decision record.\\n- IEC 62443 control mapping.\\n\\n#### Read / Watch / Courses\\n\\n- IEC 62443-2-1, 2-3, 2-4, 3-2, 3-3, 4-1, and 4-2 overviews.\\n- ISA/IEC 62443 fundamentals.\\n- NIST SP 800-82r3 architecture sections.\\n- Waterfall, Fox-IT, Owl, and other data-diode architecture references.\\n- Courses: SANS ICS410/ICS456 or ISA/IEC 62443 practitioner training.\\n\\n### Track H.4: OT Detection, Incident Response, Sectors, And IIoT\\n\\nGoal: operate OT security across sectors, converged IT/OT environments, and cyber-physical incidents.\\n\\n#### Learn\\n\\n- OT detection engineering: engineering workstation activity, unauthorized logic changes, abnormal commands, new devices, unexpected routes, remote access anomalies, and process-aware detections.\\n- Incident response in OT: plant isolation, continued operation decisions, manual fallback, safety officer role, vendor role, evidence preservation, and restart criteria.\\n- Sector-specific concerns: electricity, district heating, water, rail, ports, manufacturing, process industry, mining, building automation, and healthcare facilities.\\n- Swedish operational context: Svenska kraftnät, Energimyndigheten, Livsmedelsverket, Trafikverket, Transportstyrelsen, municipal water, Vattenfall, Fortum, E.ON Sverige, ABB, Sandvik, SSAB, LKAB, Boliden, Tetra Pak, Volvo factories.\\n- IIoT and edge: gateways, cloud analytics, industrial 5G, TSN, remote maintenance, MQTT/OPC UA bridges, and device-to-cloud-to-OT attack paths.\\n- Regulatory reporting: sector authorities, CERT-SE/MCF, customer communication, environmental/safety communication, and continuity obligations.\\n\\n#### Practice\\n\\n- Create an OT detection coverage map using ATT&CK for ICS.\\n- Run a tabletop where ransomware reaches engineering workstations but production must remain safe.\\n- Map one IIoT gateway from sensor to cloud analytics and back into operational decisions.\\n- Draft a sectoral reporting matrix for a Swedish OT incident.\\n\\n#### Deliverables\\n\\n- OT detection coverage map.\\n- OT incident response playbook.\\n- IIoT risk assessment.\\n- Sectoral reporting matrix.\\n- Manual fallback and restart checklist.\\n\\n#### Read / Watch / Courses\\n\\n- MITRE ATT&CK for ICS.\\n- Dragos, SANS, and CISA OT incident publications.\\n- ENISA and MSB/MCF guidance for critical infrastructure.\\n- ISA/IEC 62443 and SANS ICS incident response courses.\\n- S4, SANS ICS Summit, and Black Hat ICS talks.\\n\\n### Track I.1: Public Sector Legal Model, OSL, Records, And Governance\\n\\nGoal: understand the legal and governance model that makes Swedish public-sector security different from private-sector security.\\n\\n#### Learn\\n\\n- Public-sector landscape: statliga myndigheter, regioner, kommuner, kommunala bolag, universities, agencies, public-sector suppliers, and shared service providers.\\n- Legal foundations: Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen, Offentlighets- och sekretesslagen, Förvaltningslagen, Kommunallagen, Arkivlagen, GDPR, dataskyddslagen, säkerhetsskyddslagen, and sector-specific laws.\\n- Offentlighetsprincipen: allmän handling, received/expedited/finalized records, secrecy assessment, diarieföring, archiving, public scrutiny, and incident-report implications.\\n- OSL reasoning: secrecy grounds, harm tests, time limits, confidentiality marking versus legal decision, and handling of security-sensitive details.\\n- Governance constraints: political accountability, tax-funded budgets, transparency, public procurement, audit, delegated decision-making, and variable security maturity.\\n- Public-sector data protection: legal obligation, exercise of official authority, special categories of data, registerförfattningar, DPIAs, and IMY expectations.\\n\\n#### Practice\\n\\n- Walk one security incident record through allmän handling, diarieföring, and OSL assessment questions.\\n- Read an OSL chapter relevant to a sector and write an applicability note.\\n- Map one public-sector security decision from operational owner to political or agency accountability.\\n- Build a public-sector information classification example that includes public, confidential, personal, and security-sensitive information.\\n\\n#### Deliverables\\n\\n- OSL applicability memo.\\n- Allmän handling and diarieföring procedure for security records.\\n- Public-sector governance map.\\n- Public-sector data protection trigger checklist.\\n- Information classification example.\\n\\n#### Read / Watch / Courses\\n\\n- Offentlighets- och sekretesslagen.\\n- Förvaltningslagen, Kommunallagen, Arkivlagen, and relevant constitutional material.\\n- IMY guidance for public-sector data processing.\\n- MSB/MCF method support for information security.\\n- Riksrevisionen reports on public-sector IT security.\\n\\n### Track I.2: Procurement, Suppliers, Cloud, And Säkerhetsskydd\\n\\nGoal: handle supplier and technology decisions in public-sector environments where law, contracts, security, and political accountability overlap.\\n\\n#### Learn\\n\\n- Public procurement: LOU, LUFS, framework agreements, Kammarkollegiet, Statens inköpscentral, evaluation criteria, direktupphandling, exclusion grounds, and conflict-of-interest rules.\\n- Security in tenders: ISO 27001, NIS2 alignment, GDPR processor terms, incident notification, logging, audit rights, subcontractors, exit assistance, vulnerability handling, and evidence requirements.\\n- Public-sector cloud decisions: data location, support access, metadata, logging, backups, subprocessors, lawful access, public-records handling, exit plans, concentration risk, and sovereign-cloud claims.\\n- Säkerhetsskydd in public sector: security-sensitive activity, säkerhetsskyddsanalys, security-classified information, SUA/security protection agreements, supplier vetting, and foreign ownership/control questions.\\n- Supplier ecosystem: Atea, Tietoevry, CGI, Knowit, Sopra Steria, Combitech, AFRY, Inera, SKR Företag, regional suppliers, and SaaS vendors.\\n- Contract lifecycle: requirements, evaluation, onboarding, access management, monitoring, audit, incident handling, renewals, and termination.\\n\\n#### Practice\\n\\n- Draft security requirements for a public-sector procurement of a cloud or SaaS service.\\n- Evaluate a supplier response against data protection, incident response, logging, subcontractor, and exit requirements.\\n- Write a säkerhetsskydd applicability note for a public-sector outsourcing scenario.\\n- Build an exit and continuity plan for a public-sector critical supplier.\\n\\n#### Deliverables\\n\\n- Public procurement security clause set.\\n- Supplier evaluation checklist.\\n- Cloud supplier risk assessment.\\n- Säkerhetsskydd applicability memo.\\n- Exit and continuity requirements.\\n\\n#### Read / Watch / Courses\\n\\n- LOU and LUFS.\\n- Kammarkollegiet procurement guidance.\\n- Säkerhetspolisen and Försvarsmakten open säkerhetsskydd guidance.\\n- MSB/MCF guidance on outsourcing and information security.\\n- SKR and Inera material where relevant.\\n\\n### Track I.3: Sector Context: Healthcare, Justice, Education, And Municipal IT\\n\\nGoal: understand how public-sector security changes by sector and service mission.\\n\\n#### Learn\\n\\n- Healthcare and regions: 21 regions, patientdatalagen, sammanhållen journalföring, Inera/1177, medical device regulation, NIS2 health scope, GDPR special category data, legacy systems, and vendor concentration.\\n- Law enforcement and justice: Polismyndigheten, Säkerhetspolisen, Åklagarmyndigheten, Domstolsverket, brottsdatalagen, forensic readiness, sensitive investigations, and säkerhetsskydd overlap.\\n- Education and research: schools, universities as myndigheter, children's data, learning platforms, research data, dual-use research, export control, and academic openness.\\n- Municipal IT: 290 municipalities, social services, schools, local infrastructure, small IT teams, outsourcing, ransomware exposure, political visibility, and variable maturity.\\n- Civil preparedness: totalförsvar, krigsplacering, critical societal activity, sector-responsible authorities, MSB/MCF coordination, and continuity planning.\\n- Typical incidents: ransomware, supplier outage, exposed personal data, identity compromise, DDoS against citizen services, and insecure integrations.\\n\\n#### Practice\\n\\n- Map a regional healthcare system against patientdatalagen, GDPR, NIS2, and operational continuity needs.\\n- Draft a municipal cybersecurity baseline for a small kommun.\\n- Build a research-data security assessment for a university project with dual-use implications.\\n- Run a tabletop for a supplier outage affecting schools, healthcare, or municipal services.\\n\\n#### Deliverables\\n\\n- Healthcare legal/control mapping.\\n- Municipal cybersecurity baseline.\\n- Education/research data risk assessment.\\n- Supplier outage tabletop report.\\n- Civil preparedness continuity outline.\\n\\n#### Read / Watch / Courses\\n\\n- Patientdatalagen and patientdataförordningen.\\n- Brottsdatalagen.\\n- SKR cybersecurity recommendations for municipalities and regions.\\n- E-hälsomyndigheten and Inera publications.\\n- MSB/MCF and Försvarshögskolan material on civil preparedness.\\n\\n### Track I.4: Incident Management, Total Defence, And Public Accountability\\n\\nGoal: manage public-sector incidents where transparency, continuity, secrecy, citizens, and political accountability collide.\\n\\n#### Learn\\n\\n- Public-sector incident roles: operational IT, agency leadership, communications, legal, DPO, säkerhetsskyddschef, procurement, records office, political leadership, sector authority, CERT-SE/MCF, and suppliers.\\n- Notification and reporting: GDPR, NIS2/Cybersäkerhetslagen, sectoral reporting, säkerhetsskydd incidents, police reports, procurement contract notice, and public communication.\\n- Public communication: citizen-facing impact, media scrutiny, open records, secrecy boundaries, status pages, service fallback, and trust restoration.\\n- Total defence: continuity, prioritization, manual fallback, krigsplacering, crisis organization, civil-military coordination, and resilience of critical societal activity.\\n- Post-incident handling: diarieföring, lessons learned, Riksrevisionen/IVO/IMY or sector review, political questions, budget changes, and procurement follow-up.\\n- Ethical and professional judgment: transparency about uncertainty, protecting sensitive details, not hiding risk behind legal language, and escalating weak preparedness.\\n\\n#### Practice\\n\\n- Run a public-sector ransomware tabletop including records handling, media, citizen services, supplier coordination, and legal notification.\\n- Draft a public incident update that is useful but does not disclose sensitive defensive details.\\n- Build a notification matrix for GDPR, NIS2, säkerhetsskydd, and sector-specific obligations.\\n- Write a post-incident review structure suitable for a public-sector organization.\\n\\n#### Deliverables\\n\\n- Public-sector incident playbook.\\n- Notification matrix.\\n- Public communication templates.\\n- Total defence continuity exercise.\\n- Post-incident review template.\\n\\n#### Read / Watch / Courses\\n\\n- MSB/MCF incident and continuity guidance.\\n- CERT-SE public incident guidance.\\n- IMY breach notification guidance.\\n- Försvarshögskolan civil preparedness courses and public lectures.\\n- Riksrevisionen and sector authority post-incident reports.\\n\\n### Track X.1: Cross-Domain Product Security Model\\n\\nGoal: combine specializations without losing the threat model of each domain.\\n\\n#### Learn\\n\\n- How one product can combine embedded hardware, IoT fleet services, cloud APIs, mobile apps, AI features, automotive safety, defence sensitivity, public-sector obligations, telecom connectivity, and OT interfaces.\\n- Layered reading method: assets, actors, authorities, data classes, safety impact, update path, identity path, supplier path, operational path, and end-of-life path.\\n- Control conflicts: safety versus patching, privacy versus telemetry, availability versus isolation, cloud convenience versus sovereignty, and AI feature speed versus assurance.\\n- Evidence layering: technical diagrams, legal applicability, safety analysis, threat model, supplier obligations, incident runbooks, and audit evidence.\\n- How to avoid local optimization: fixing a device issue while creating a cloud takeover path, or solving encryption while ignoring support access.\\n\\n#### Practice\\n\\n- Analyze a connected military vehicle, AI-enabled industrial product, or public-sector IoT platform through at least three specialization lenses.\\n- Map which teams own which controls and where handoffs can fail.\\n- Identify five cross-domain assumptions that need explicit validation.\\n- Write a decision memo where two domain priorities conflict.\\n\\n#### Deliverables\\n\\n- Cross-domain architecture map.\\n- Multi-domain threat model.\\n- Control conflict decision memo.\\n- Responsibility and evidence matrix.\\n- Cross-domain review checklist.\\n\\n#### Read / Watch / Courses\\n\\n- NIST CSF 2.0 as a common organizing model.\\n- ISO/IEC 27001 for governance context.\\n- CSA CCM, ISO/SAE 21434, IEC 62443, GSMA, and OWASP guidance as domain overlays.\\n- Case studies on connected vehicle, IoT, cloud, telecom, and public-sector incidents.\\n\\n### Track X.2: AI, Cloud, Agents, And Data Pipelines\\n\\nGoal: understand the intersection between AI systems and cloud platforms.\\n\\n#### Learn\\n\\n- Managed AI platforms concentrate model, data, identity, logging, supply-chain, GPU cost, and tenant-isolation risk.\\n- RAG systems depend on cloud storage, vector databases, identity permissions, document lifecycle, and data retention controls.\\n- Agentic systems can turn cloud permissions into deployments, API calls, ticket changes, email, database writes, and data movement.\\n- Cloud AI risks: model endpoint abuse, key leakage, prompt/response logging decisions, tenant separation, rate limits, GPU cost abuse, provider outage, and data residency.\\n- Legal/regulatory overlap: AI Act, GDPR, DORA, NIS2/Cybersäkerhetslagen, contracts, cloud supplier obligations, and public-sector records where AI supports official activity.\\n\\n#### Practice\\n\\n- Threat model a RAG system hosted in cloud with storage, vector database, model endpoint, and tool-using agent.\\n- Review IAM permissions for a managed AI workload.\\n- Create a rate-limit and budget-control plan for AI endpoints.\\n- Map AI logs and traces to privacy, records, and incident-response requirements.\\n\\n#### Deliverables\\n\\n- Cloud AI threat model.\\n- Managed AI IAM review.\\n- AI endpoint abuse and cost-control plan.\\n- RAG data lifecycle map.\\n- AI/cloud incident runbook.\\n\\n#### Read / Watch / Courses\\n\\n- Provider documentation for managed AI service security.\\n- OWASP LLM Top 10 and OWASP Agentic guidance.\\n- NIST AI RMF and CSA CCM.\\n- Microsoft, AWS, and Google AI security reference material.\\n\\n### Track X.3: Connected Products, Cloud, OT, And Fleet Safety\\n\\nGoal: understand connected products where device compromise, cloud compromise, or operational misuse can create physical-world impact.\\n\\n#### Learn\\n\\n- Modern vehicles, industrial devices, medical devices, and critical IoT products combine embedded security, cloud control planes, fleet identity, OTA, privacy, safety constraints, and sometimes OT interfaces.\\n- Device-to-cloud-to-operations attack paths: support account compromise, OTA signing compromise, fleet command abuse, telemetry manipulation, and remote maintenance misuse.\\n- Protocol and interface overlap: CAN, Ethernet, OPC UA, Modbus, MQTT, CoAP, cellular, Wi-Fi, BLE, diagnostics, and service tooling.\\n- Incident implications: unsafe state, fleet rollback, physical containment, customer communication, authority notification, supplier coordination, and safety case updates.\\n- Evidence alignment: product security evidence, safety evidence, OT segmentation evidence, cloud logs, supplier statements, and incident timelines.\\n\\n#### Practice\\n\\n- Build a combined device-cloud-operations architecture diagram.\\n- Map how a compromised cloud support account could affect devices or physical operations.\\n- Design segmentation and monitoring for device telemetry entering OT or enterprise networks.\\n- Run a tabletop where a firmware update causes unsafe or unavailable operation.\\n\\n#### Deliverables\\n\\n- Cyber-physical architecture diagram.\\n- Device-to-cloud-to-operations attack path map.\\n- Safety-aware incident response outline.\\n- OTA rollback and containment plan.\\n- Cross-domain evidence checklist.\\n\\n#### Read / Watch / Courses\\n\\n- NIST SP 800-82r3.\\n- IEC 62443 overview material.\\n- ISO/SAE 21434, CRA, and IoT security guidance.\\n- MITRE ATT&CK for ICS.\\n- Automotive, IoT, OT, and cloud case studies involving fleet interactions.\\n\\n### Track X.4: Defence, Public Sector, Sovereign Cloud, And Supplier Chains\\n\\nGoal: handle digital service decisions where defence, public-sector, cloud, sovereignty, and protective-security obligations overlap.\\n\\n#### Learn\\n\\n- Cloud use under säkerhetsskydd, public-sector procurement, OSL, outsourcing, support access, foreign ownership/control, supplier chains, telemetry, metadata, logs, backups, and administrative access.\\n- Sovereign cloud, dedicated regions, private cloud, and disconnected environments as design options, not labels that automatically solve risk.\\n- Public-sector specifics: offentlighetsprincipen, OSL, diarieföring, records retention, public procurement, political accountability, citizen-facing impact, and total defence.\\n- Defence-specific concerns: classification, NATO collaboration, KSF, COMSEC, TEMPEST, cross-domain solutions, and foreign intelligence threat.\\n- Civil preparedness: critical societal activity, sector-responsible authorities, crisis communication, resilience, and continuity.\\n\\n#### Practice\\n\\n- Evaluate a cloud or SaaS supplier for a public-sector or defence-adjacent workload.\\n- Draft an OSL and säkerhetsskydd applicability memo for a cloud-hosted service.\\n- Build a support-access and metadata risk analysis.\\n- Write exit, continuity, and incident-notification requirements for a contract.\\n\\n#### Deliverables\\n\\n- Cloud/säkerhetsskydd applicability memo.\\n- Public-sector cloud supplier risk assessment.\\n- Support-access and metadata threat model.\\n- Contractual security and exit requirements.\\n- Civil-preparedness continuity note.\\n\\n#### Read / Watch / Courses\\n\\n- OSL, LOU, LUFS, säkerhetsskyddslag, and säkerhetsskyddsförordning.\\n- MCF/MSB method support for information security.\\n- Kammarkollegiet procurement guidance.\\n- Säkerhetspolisen and Försvarsmakten open säkerhetsskydd guidance.\\n- Riksrevisionen reports on public-sector IT security.\\n\\n### Track X.5: Telecom, Cloud Edge, IoT, And Critical Infrastructure\\n\\nGoal: understand where connectivity, cloud edge, IoT fleets, private networks, and critical infrastructure depend on each other.\\n\\n#### Learn\\n\\n- Private 5G and cellular IoT can become part of industrial, automotive, public-safety, defence, and municipal service architectures.\\n- MEC and cloud edge concentrate network, compute, identity, routing, logging, physical access, and tenant-isolation risk close to critical operations.\\n- Connectivity failures can become safety, availability, public service, or crisis-management failures when systems assume network availability.\\n- Cross-domain responsibilities: operator, cloud provider, equipment vendor, integrator, application owner, public authority, and asset owner.\\n- Regulatory overlap: LEK, NIS2/Cybersäkerhetslagen, CER, CRA, GDPR/ePrivacy, public procurement, and säkerhetsskydd depending on scenario.\\n\\n#### Practice\\n\\n- Map a cellular IoT or private 5G deployment used by a critical infrastructure operator.\\n- Identify which controls belong to telecom, cloud, IoT, OT, and public-sector owners.\\n- Walk through a BGP, DNS, MEC, or operator outage affecting an IoT fleet.\\n- Write an incident coordination plan across operator, cloud provider, device vendor, and asset owner.\\n\\n#### Deliverables\\n\\n- Critical connectivity architecture map.\\n- Cross-domain responsibility matrix.\\n- Telecom/cloud/IoT outage scenario.\\n- Incident coordination plan.\\n- Regulatory overlap memo.\\n\\n#### Read / Watch / Courses\\n\\n- 3GPP, GSMA, ENISA 5G, CSA CCM, IEC 62443, and NIST SP 800-82 material.\\n- PTS and MSB/MCF guidance for electronic communications and critical services.\\n- Case studies on telecom outages, cloud edge incidents, IoT fleet compromise, and critical infrastructure disruptions.\\n\\n\\n## 4. Practice Portfolio\\n\\nThe portfolio turns the roadmap into evidence. Use it alongside the Core Curriculum and Specializations. You do not need every artifact at once; build them gradually.\\n\\n### Foundation Package\\n\\n- Asset inventory.\\n- Data classification model.\\n- Network diagram.\\n- Identity model.\\n- PKI and certificate validation note.\\n- Access control standard.\\n- Backup and restore evidence.\\n- Physical and environmental controls checklist.\\n\\n### ISMS Package\\n\\n- ISMS scope.\\n- Risk methodology.\\n- Risk register.\\n- Statement of Applicability.\\n- Management review agenda.\\n- Policy framework.\\n- Security program charter.\\n- Awareness and training plan.\\n- Personnel security checklist.\\n- Security investment business case.\\n\\n### Cyber Defense Package\\n\\n- Hardening baseline.\\n- Vulnerability management procedure.\\n- Logging source inventory.\\n- Detection coverage map.\\n- Backup and restore report.\\n- Incident response plan.\\n- Incident classification matrix.\\n- BIA and service dependency map.\\n- BCP/DRP outline.\\n- DR exercise plan.\\n- Investigation and evidence handling checklist.\\n\\n### Cloud Security Package\\n\\n- Cloud landing zone design.\\n- Shared responsibility matrix.\\n- Cloud IAM model.\\n- Cloud network segmentation design.\\n- Key management and encryption design.\\n- Logging and detection coverage map.\\n- Container/Kubernetes security checklist.\\n- SaaS security baseline.\\n- IaC guardrail and policy-as-code set.\\n- Cloud incident runbook.\\n- Cloud control mapping.\\n\\n### Secure Engineering Package\\n\\n- Threat model.\\n- Architecture review note.\\n- Cryptography decision record.\\n- Secure coding checklist.\\n- CI/CD security checklist.\\n- Dependency and SBOM process.\\n- Vulnerability disclosure policy.\\n- Software supply-chain risk assessment.\\n\\n### Privacy And Regulation Package\\n\\n- Data inventory.\\n- DPIA.\\n- ROPA.\\n- Breach notification matrix.\\n- NIS2/Cybersäkerhetslagen applicability memo.\\n- GDPR transfer assessment.\\n- CRA/AI Act/DORA relevance note.\\n- Asset and media handling standard.\\n- Decommissioning and secure destruction checklist.\\n- Control mapping to ISO/NIST/CIS.\\n\\n### Säkerhetsskydd Package\\n\\n- Säkerhetsskyddsanalys.\\n- Classification handling procedure.\\n- Security vetting process.\\n- SUA decision checklist.\\n- Supplier flow-down checklist.\\n- Security-sensitive outsourcing memo.\\n\\n### Embedded/Product Package\\n\\n- Embedded product threat model.\\n- Secure boot and update requirements.\\n- Manufacturing provisioning checklist.\\n- Firmware analysis report.\\n- End-of-life plan.\\n\\n### AI/LLM/Agentic Package\\n\\n- AI system inventory.\\n- LLM/RAG/agent threat model.\\n- Agent permission matrix.\\n- MCP/tool review checklist.\\n- AI red-team report.\\n- AI incident response addendum.\\n\\n### Domain Package\\n\\n- Defence supplier security plan.\\n- IoT security architecture and CRA mapping.\\n- Automotive TARA and ISO/SAE 21434 evidence checklist.\\n- Cloud-native product architecture and shared responsibility mapping.\\n- Cross-domain architecture memo.\\n\\n## 5. Reference Library\\n\\nReference material supports the roadmap. It is not the main learning order. Use this section when you need the source standard, legal text, certification idea, book, community, or authority page.\\n\\n### 5.1 Standards, Frameworks, And Regulations\\n\\n#### Core Management And Controls\\n\\n- ISO/IEC 27001: ISMS requirements.\\n- ISO/IEC 27002: control guidance.\\n- ISO/IEC 27005: information security risk management.\\n- ISO 31000: enterprise risk management.\\n- ISO 22301: business continuity.\\n- ISO/IEC 27701: privacy information management.\\n- ISO/IEC 29100: privacy framework.\\n- NIST CSF 2.0: Govern, Identify, Protect, Detect, Respond, Recover.\\n- NIST SP 800-53: security and privacy controls.\\n- CIS Critical Security Controls v8.1.\\n- COBIT and ITIL for governance and service management context.\\n\\n#### Technical And Security Engineering\\n\\n- CIS Benchmarks.\\n- OWASP Top 10, ASVS, SAMM, API Security Top 10, MASVS, LLM Top 10, Agentic guidance.\\n- MITRE ATT&CK, D3FEND, CAPEC, CWE.\\n- NIST SP 800-61r3.\\n- NIST SP 800-207 Zero Trust.\\n- NIST SP 800-218 SSDF.\\n- SLSA, in-toto, Sigstore, CycloneDX, SPDX.\\n\\n#### Cloud, SaaS, And Platform Security\\n\\n- CSA Cloud Controls Matrix.\\n- CSA Security, Trust, Assurance and Risk `(STAR)`.\\n- ISO/IEC 27017 for cloud security controls.\\n- ISO/IEC 27018 for protection of personal data in public cloud.\\n- ISO/IEC 22123 for cloud computing concepts and terminology.\\n- ISO/IEC 19941 for cloud interoperability and portability.\\n- NIST SP 800-144, 800-145, and 800-146 for public cloud security and cloud definitions.\\n- NIST SP 800-207 for Zero Trust architecture.\\n- CIS Benchmarks for AWS, Azure, Google Cloud, Kubernetes, Linux, Windows, and containers.\\n- AWS Well-Architected Security Pillar.\\n- Microsoft Cloud Security Benchmark and Azure security architecture guidance.\\n- Google Cloud security foundations and security blueprints.\\n- Kubernetes security documentation.\\n- OWASP Kubernetes Top 10.\\n- SOC 2 and ISAE 3402 / SOC assurance reports for supplier assurance context.\\n- EUCS and national cloud assurance schemes where relevant.\\n\\n#### Embedded, IoT, And Product Security\\n\\n- IEC/ISA 62443.\\n- Common Criteria / ISO/IEC 15408.\\n- FIPS 140-3.\\n- PSA Certified.\\n- SESIP.\\n- EUCC and EUCS.\\n- TCG TPM 2.0.\\n- Trusted Firmware-M.\\n- MCUboot.\\n- NIST FIPS 203/204/205 for PQC.\\n- NIST SP 800-208 for stateful hash-based signatures.\\n- NIST lightweight cryptography / Ascon.\\n- ETSI EN 303 645.\\n- EN 18031 series.\\n- NISTIR 8259 and 8425.\\n- ISO/IEC 27400, 27402, 27404.\\n\\n#### Automotive\\n\\n- ISO/SAE 21434.\\n- ISO 24089.\\n- ISO 26262.\\n- ISO 21448 SOTIF.\\n- UN R155 and R156.\\n- ISO/PAS 5112.\\n- ISO/SAE 8475.\\n- AUTOSAR Classic and Adaptive security.\\n\\n#### AI\\n\\n- ISO/IEC 42001.\\n- ISO/IEC 23894.\\n- NIST AI RMF 1.0.\\n- NIST Generative AI Profile.\\n- NIST adversarial ML taxonomy.\\n- MITRE ATLAS.\\n- OWASP Top 10 for LLM Applications.\\n- OWASP Top 10 for Agentic Applications.\\n- OWASP Agentic Skills Top 10.\\n- ENISA AI security guidance.\\n- EU AI Act.\\n\\n#### Swedish And Defence\\n\\n- Cybersäkerhetslag `(2025:1506)`.\\n- Cybersäkerhetsförordning `(2025:1507)`.\\n- Säkerhetsskyddslag `(2018:585)`.\\n- Säkerhetsskyddsförordning `(2021:955)`.\\n- PMFS 2022:1.\\n- Försvarsmakten föreskrifter.\\n- KSF v3.1.\\n- NATO Security Policy and industrial security documents.\\n- CCRA, SOG-IS, CSEC, EUCC.\\n\\n### 5.2 Certifications, Books, Communities, And Current Awareness\\n\\n#### Certifications By Track\\n\\nUse certifications as study scaffolding, not as the goal.\\n\\n##### Foundation\\n\\n- CompTIA Security+.\\n- ISC2 Certified in Cybersecurity.\\n\\n##### Management, Governance, Audit\\n\\n- CISSP.\\n- CISM.\\n- CISA.\\n- CRISC.\\n- ISO/IEC 27001 Lead Implementer / Lead Auditor.\\n- CGRC.\\n\\n##### Defensive Technical\\n\\n- GIAC GSEC, GCIH, GCIA, GMON, GCFA, GCFE.\\n- Blue Team Level 1 / 2.\\n\\n##### Offensive\\n\\n- OSCP.\\n- OSEP, OSWE, OSED.\\n- GPEN, GXPN, GWAPT.\\n- PNPT.\\n\\n##### Cloud\\n\\n- CCSP.\\n- CCSK.\\n- AWS Security Specialty.\\n- Azure SC-100, SC-200, AZ-500.\\n- GCP Professional Cloud Security Engineer.\\n\\n##### Privacy\\n\\n- CIPP/E.\\n- CIPM.\\n- CIPT.\\n\\n##### Sweden-Specific Learning\\n\\n- Säpo vägledningar.\\n- MCF/MSB method support and training.\\n- Försvarshögskolan and reputable säkerhetsskydd training.\\n- KSF and defence-sector training where relevant.\\n\\n#### Books And Long-Form Sources\\n\\n##### General Security\\n\\n- Ross Anderson: Security Engineering.\\n- Google: Building Secure and Reliable Systems.\\n- Ferguson, Schneier, Kohno: Cryptography Engineering.\\n- Adam Shostack: Threat Modeling.\\n- Hubbard and Seiersen: How to Measure Anything in Cybersecurity Risk.\\n- Kim Zetter: Countdown to Zero Day.\\n- Andy Greenberg: Sandworm.\\n\\n##### Cloud\\n\\n- CSA cloud security guidance.\\n- Provider security reference architectures and well-architected frameworks.\\n- Kubernetes security documentation.\\n- CNCF cloud-native security papers.\\n- SRE and resilience literature for operational reliability context.\\n\\n##### Embedded / IoT\\n\\n- The Hardware Hacking Handbook.\\n- Practical IoT Hacking.\\n- The IoT Hacker's Handbook.\\n- Embedded Software Development for Safety-Critical Systems.\\n\\n##### AI\\n\\n- Generative AI Security.\\n- Securing AI Agents.\\n- AI Snake Oil.\\n- The Alignment Problem.\\n- The Algorithmic Foundations of Differential Privacy.\\n\\n##### Automotive\\n\\n- The Car Hacker's Handbook.\\n- Practical Vehicle Cybersecurity.\\n\\n##### Swedish / Defence\\n\\n- Säpo vägledning series.\\n- MCF/MSB method support.\\n- Försvarsmakten open publications where available.\\n- FOI publications.\\n- Tallinn Manual 2.0 for international law in cyberspace context.\\n\\n#### Communities And Conferences\\n\\n- SecurityFest.\\n- Internetdagarna.\\n- Sektor3:1.\\n- OWASP chapters.\\n- ISACA Sweden Chapter.\\n- FIRST and CERT communities.\\n- Cloud Security Alliance.\\n- CNCF and Kubernetes security communities.\\n- Hardwear.io.\\n- DEF CON Hardware Hacking Village, IoT Village, AI Village, Car Hacking Village.\\n- CHES.\\n- Embedded World.\\n- escar Europe.\\n- Auto-ISAC.\\n- AI Sweden events.\\n- FOLK och FÖRSVAR.\\n- SOFF groups.\\n\\n#### Current Awareness\\n\\nTrack:\\n\\n- CERT-SE.\\n- MCF/MSB.\\n- NCSC Sweden.\\n- IMY.\\n- Säkerhetspolisen annual reports.\\n- PTS.\\n- Finansinspektionen.\\n- ENISA.\\n- CISA KEV and advisories.\\n- Mandiant, Microsoft Threat Intelligence, Talos, Unit 42, Truesec.\\n- Risky Business, SANS NewsBites, Krebs on Security, Bruce Schneier.\\n\\n### 5.3 Key Official Sources\\n\\n#### Swedish Sources\\n\\n- MCF/MSB method support for systematic information security work: https://www.msb.se/sv/amnesomraden/informationssakerhet-cybersakerhet-och-sakra-kommunikationer/arbeta-systematiskt-informationssakerhet-och-cybersakerhet/metodstod-for-informationssakerhetsarbete/\\n- MCF/MSB information security management system guidance: https://www.msb.se/sv/amnesomraden/informationssakerhet-cybersakerhet-och-sakra-kommunikationer/arbeta-systematiskt-informationssakerhet-och-cybersakerhet/ledningssystem-for-informationssakerhet-lis/\\n- MSB/MCF name change: https://www.msb.se/sv/om-msb/vart-uppdrag/myndigheten-for-civilt-forsvar/\\n- Swedish Cybersäkerhetslag `(2025:1506)`: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/cybersakerhetslag-20251506_sfs-2025-1506/\\n- Swedish Cybersäkerhetsförordning `(2025:1507)`: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/_sfs-2025-1507/\\n- PTS incident reporting under cybersäkerhetslagen: https://pts.se/sakerhet-och-integritet/cybersakerhetslagen/incidentrapportera-enligt-cybersakerhetslagen/\\n- Swedish Säkerhetsskyddslag `(2018:585)`: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sakerhetsskyddslag-2018585_sfs-2018-585/\\n- Swedish Säkerhetsskyddsförordning `(2021:955)`: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sakerhetsskyddsforordning-2021955_sfs-2021-955/\\n- Säkerhetspolisen on säkerhetsskyddsanalys: https://sakerhetspolisen.se/sakerhetsskydd/sakerhetsskyddsanalys.html\\n- IMY personal data incidents: https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/personuppgiftsincidenter/\\n- CERT-SE: https://www.cert.se/\\n- NCSC Sweden: https://www.ncsc.se/\\n- Finansinspektionen on DORA: https://finansinspektionen.se/sv/marknad/it-risker-dora/om-dora/\\n- PTS on LEK: https://pts.se/internet-och-telefoni/regler-vi-arbetar-efter/lek--lagen-om-elektronisk-kommunikation/\\n- Försvarsmakten on säkerhetsskydd: https://www.forsvarsmakten.se/om-forsvarsmakten/organisation/gemensamma/must/sakerhetsskydd/\\n- ISP krigsmateriel: https://www.isp.se/krigsmateriel\\n- ISP dual-use products: https://www.isp.se/produkter-med-dubbla-anvandningsomraden\\n\\n#### EU Sources\\n\\n- European Commission NIS2 overview: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive\\n- EUR-Lex NIS2: https://eur-lex.europa.eu/legal-content/en/LSU/?uri=CELEX%3A32022L2555\\n- EUR-Lex CER Directive `(EU) 2022/2557`: https://eur-lex.europa.eu/eli/dir/2022/2557/oj\\n- European Commission Cyber Resilience Act summary: https://digital-strategy.ec.europa.eu/en/policies/cra-summary\\n- CRA reporting obligations: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting\\n- EUR-Lex Cyber Resilience Act `(EU) 2024/2847`: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng\\n- ENISA Cybersecurity Act certification context: https://certification.enisa.europa.eu/about-eu-certification/eu-regulatory-context/cybersecurity-act_en\\n- ESMA DORA overview: https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/digital-operational-resilience-act-dora\\n- EUR-Lex eIDAS amendment `(EU) 2024/1183`: https://eur-lex.europa.eu/eli/reg/2024/1183\\n- EUR-Lex AI Act `(EU) 2024/1689`: https://eur-lex.europa.eu/eli/reg/2024/1689/oj\\n- EUR-Lex Radio Equipment Directive delegated cybersecurity regulation `(EU) 2022/30`: https://eur-lex.europa.eu/eli/reg_del/2022/30/oj\\n- EU Cyber Solidarity Act: https://digital-strategy.ec.europa.eu/en/policies/cyber-solidarity\\n\\n#### Standards And Framework Sources\\n\\n- ISO/IEC 27001:2022: https://www.iso.org/standard/27001\\n- ISO/IEC 27002:2022: https://www.iso.org/standard/75652.html\\n- ISO/IEC 27005:2022: https://www.iso.org/standard/80585.html\\n- ISO 31000:2018: https://www.iso.org/standard/65694.html\\n- ISO 22301:2019: https://www.iso.org/standard/75106.html\\n- ISO/IEC 27701:2025: https://www.iso.org/standard/27701\\n- ISO/IEC 42001:2023: https://www.iso.org/standard/42001\\n- ISO/SAE 21434:2021: https://www.iso.org/standard/70918.html\\n- ISO 24089:2023: https://www.iso.org/standard/77796.html\\n- ISO 26262: https://www.iso.org/publication/PUB200262.html\\n- NIST Cybersecurity Framework 2.0: https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20\\n- NIST SP 800-53 Rev. 5: https://csrc.nist.gov/Pubs/sp/800/53/r5/upd1/Final\\n- NIST SP 800-61r3: https://www.nist.gov/news-events/news/2025/04/nist-revises-sp-800-61-incident-response-recommendations-and-considerations\\n- NIST SP 800-207 Zero Trust Architecture: https://csrc.nist.gov/publications/detail/sp/800-207/final\\n- NIST AI RMF 1.0: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10\\n- NISTIR 8259 Rev. 1: https://csrc.nist.gov/pubs/ir/8259/r1/final\\n- CSA Cloud Controls Matrix: https://cloudsecurityalliance.org/research/cloud-controls-matrix\\n- CSA STAR: https://cloudsecurityalliance.org/star\\n- CIS Critical Security Controls v8.1: https://www.cisecurity.org/controls/v8-1\\n- CIS Benchmarks: https://www.cisecurity.org/cis-benchmarks\\n- Kubernetes security documentation: https://kubernetes.io/docs/concepts/security/\\n- OWASP Top 10: https://owasp.org/Top10/\\n- OWASP LLM Top 10: https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/\\n- OWASP Agentic AI guidance: https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/\\n- OWASP Agentic Applications Top 10: https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/\\n- OWASP Agentic Skills Top 10: https://owasp.org/www-project-agentic-skills-top-10/\\n- MITRE ATT&CK: https://attack.mitre.org/\\n- MITRE ATLAS: https://atlas.mitre.org/\\n- MITRE CWE Top 25: https://cwe.mitre.org/top25/\\n- SEI CERT C Coding Standard: https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/\\n- SEI CERT C++ Coding Standard: https://cmu-sei.github.io/secure-coding-standards/sei-cert-cpp-coding-standard/\\n- ISA/IEC 62443: https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards\\n- ETSI EN 303 645 announcement: https://www.etsi.org/newsroom/press-releases/1789-2020-06-etsi-releases-world-leading-consumer-iot-security-standard\\n- UNECE Regulation No. 155: https://eur-lex.europa.eu/eli/reg/2021/387/oj/eng\\n- UNECE Regulation No. 156: https://eur-lex.europa.eu/eli/reg/2021/388/oj/eng\\n\";\n",r=`const STORAGE_KEY = "securityRoadmapV3.progress";
const ROADMAP_DB_NAME = "security-roadmap-v3";
const ROADMAP_DB_VERSION = 1;
const ROADMAP_STATE_STORE = "appState";
const ROADMAP_STATE_KEY = "current";

const JOURNAL_TYPES = [
  "Study note",
  "Practice log",
  "Reflection",
  "Question",
  "Deliverable note",
  "Resource note"
];

const SPECIALIZATION_TRACK_NAMES = {
  A: "Embedded R&D",
  B: "AI / LLM / Agentic Security",
  C: "Defence Industry",
  D: "IoT Product Security",
  E: "Automotive Cybersecurity",
  F: "Cloud / SaaS / Platform Security",
  G: "Telecom / 5G Security",
  H: "OT / ICS Security",
  I: "Public Sector Security",
  X: "Cross-Domain Intersections"
};

const PORTFOLIO_REFERENCE_ALIASES = {
  "data classification model": ["Data classification standard"],
  "identity model": ["Identity model diagram"],
  "backup and restore evidence": ["Backup and restore report"],
  "statement of applicability": ["Statement of Applicability draft"],
  "hardening baseline": ["Hardening checklist"],
  "policy framework": ["Security policy"],
  "security investment business case": ["Business case for one security investment"],
  "logging and detection coverage map": ["Cloud logging and detection coverage map"],
  "cloud incident runbook": ["Cloud incident runbook", "Cloud incident runbooks"],
  "cloud control mapping": ["Cloud control mapping to ISO/NIST/CSA/CIS", "Control mapping to ISO/NIST/CIS"],
  "dependency and sbom process": ["SBOM and dependency process"],
  "vulnerability disclosure policy": ["Vulnerability disclosure and patch process"],
  "software supply-chain risk assessment": ["SBOM and dependency process"],
  "dpia": ["DPIA template and mock DPIA"],
  "ropa": ["ROPA example"],
  "breach notification matrix": ["Breach notification checklist"],
  "control mapping to iso/nist/cis": ["Cloud control mapping to ISO/NIST/CSA/CIS"],
  "säkerhetsskyddsanalys": ["Säkerhetsskyddsanalys template", "Defence säkerhetsskyddsanalys outline"],
  "classification handling procedure": ["Security-classified information handling procedure"],
  "sua decision checklist": ["Supplier/SUA decision checklist"],
  "supplier flow-down checklist": ["Supplier flow-down requirements"],
  "security-sensitive outsourcing memo": ["Security-sensitive outsourcing decision memo"],
  "secure boot and update requirements": ["Secure boot and update design"],
  "manufacturing provisioning checklist": ["Manufacturing and provisioning risk checklist"],
  "end-of-life plan": ["End-of-support and decommissioning plan", "End-of-life and decommissioning plan"],
  "llm/rag/agent threat model": ["LLM/RAG threat model", "Agentic threat model"],
  "mcp/tool review checklist": ["Tool and MCP server review checklist"],
  "iot security architecture and cra mapping": ["IoT architecture and trust-boundary diagram", "CRA/ETSI/NIST control mapping"],
  "automotive tara and iso/sae 21434 evidence checklist": ["Automotive TARA", "ISO/SAE 21434 evidence checklist"],
  "cloud-native product architecture and shared responsibility mapping": ["Cloud reference architecture", "Shared responsibility matrix"],
  "cross-domain architecture memo": ["Cross-domain architecture map"]
};

const REVIEW_BUCKETS = [
  { id: "older", title: "6 Months+", minDays: 184, maxDays: Infinity },
  { id: "six-months", title: "1 Month+", minDays: 32, maxDays: 183 },
  { id: "month", title: "2 Weeks+", minDays: 15, maxDays: 31 },
  { id: "two-weeks", title: "1 Week+", minDays: 8, maxDays: 14 },
  { id: "week", title: "Last Week", minDays: 0, maxDays: 7 },
  { id: "no-date", title: "No Active-Level Date", minDays: Infinity, maxDays: Infinity },
  { id: "complete", title: "Review Complete", minDays: Infinity, maxDays: Infinity }
];
`,i=`let roadmapDbPromise = null;
let indexedDbWriteQueue = Promise.resolve();

function canUseIndexedDb() {
  return typeof indexedDB !== "undefined";
}

function openRoadmapDatabase() {
  if (!canUseIndexedDb()) {
    return Promise.reject(new Error("IndexedDB is not available."));
  }

  if (roadmapDbPromise) return roadmapDbPromise;

  roadmapDbPromise = new Promise((resolve, reject) => {
    let request;
    try {
      request = indexedDB.open(ROADMAP_DB_NAME, ROADMAP_DB_VERSION);
    } catch (error) {
      roadmapDbPromise = null;
      reject(error);
      return;
    }

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(ROADMAP_STATE_STORE)) {
        db.createObjectStore(ROADMAP_STATE_STORE);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      roadmapDbPromise = null;
      reject(request.error);
    };
    request.onblocked = () => {
      roadmapDbPromise = null;
      reject(new Error("IndexedDB upgrade was blocked by another open tab."));
    };
  });

  return roadmapDbPromise;
}

function readIndexedDbState() {
  return openRoadmapDatabase().then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction(ROADMAP_STATE_STORE, "readonly");
    const request = transaction.objectStore(ROADMAP_STATE_STORE).get(ROADMAP_STATE_KEY);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    transaction.onerror = () => reject(transaction.error);
  }));
}

function writeIndexedDbState(value) {
  return openRoadmapDatabase().then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction(ROADMAP_STATE_STORE, "readwrite");
    transaction.objectStore(ROADMAP_STATE_STORE).put(cloneStorageValue(value), ROADMAP_STATE_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error || new Error("IndexedDB transaction aborted."));
  }));
}

function readLegacyLocalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeLegacyLocalState(value) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Local persistence is best-effort when browser storage is restricted.
  }
}

function cloneStorageValue(value) {
  return JSON.parse(JSON.stringify(value));
}

async function loadPersistedState() {
  const indexedState = await readIndexedDbState().catch(() => null);
  if (indexedState) return indexedState;

  const legacyState = readLegacyLocalState();
  if (legacyState) {
    await writeIndexedDbState(legacyState).catch(() => {});
    return legacyState;
  }

  return null;
}

async function savePersistedState(value) {
  const snapshot = cloneStorageValue(value);
  writeLegacyLocalState(snapshot);
  indexedDbWriteQueue = indexedDbWriteQueue
    .catch(() => {})
    .then(() => writeIndexedDbState(snapshot))
    .catch(() => {});
  return indexedDbWriteQueue;
}
`,a=`function plainText(text) {
  return cleanInline(text)
    .replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/g, "$1")
    .replace(/\\s+/g, " ")
    .trim();
}

function trimText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return \`\${text.slice(0, maxLength - 3).trim()}...\`;
}

function cleanInline(text) {
  return text
    .replace(/\`([^\`]+)\`/g, "$1")
    .replace(/\\*\\*([^*]+)\\*\\*/g, "$1")
    .trim();
}

function inlineHtml(tag, markdownText) {
  const el = document.createElement(tag);
  const renderedLinks = [];
  let html = escapeHtml(markdownText)
    .replace(/\\[([^\\]]+)\\]\\((https?:\\/\\/[^\\s)]+)\\)/g, (_match, label, url) => {
      const token = \`%%ROADMAP_LINK_\${renderedLinks.length}%%\`;
      renderedLinks.push(\`<a href="\${url}" target="_blank" rel="noreferrer">\${label}</a>\`);
      return token;
    })
    .replace(/\\*\\*([^*]+)\\*\\*/g, "<strong>$1</strong>")
    .replace(/\`([^\`]+)\`/g, "<code>$1</code>")
    .replace(
      /(https?:\\/\\/[^\\s<)"]+)(?=[\\s)]|$)/g,
      '<a href="$1" target="_blank" rel="noreferrer">$1</a>'
    )
    .replace(/%%ROADMAP_LINK_(\\d+)%%/g, (_match, index) => renderedLinks[Number(index)] || "");

  el.innerHTML = html;
  return el;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function element(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
`,o=`function parseRoadmap(source) {
  const lines = source.split(/\\r?\\n/).map((text, index) => ({ text, index }));
  const h2Sections = parseH2Sections(lines);
  const coreSection = findH2(h2Sections, /^2\\.\\s+Core Curriculum/i);
  const specializationSection = findH2(h2Sections, /^3\\.\\s+Specializations/i);
  const mapSection = findH2(h2Sections, /^1\\.\\s+Map And How To Use/i);
  const portfolioSection = findH2(h2Sections, /^4\\.\\s+Practice Portfolio/i);
  const referenceSection = findH2(h2Sections, /^5\\.\\s+Reference Library/i);
  const guideSupport = parseSupportSection(mapSection);
  if (guideSupport) guideSupport.title = "Roadmap Guide";
  const referenceSupport = splitReferenceSupport(parseSupportSection(referenceSection));

  return {
    core: parseStudyChapters(coreSection, "core"),
    coreIntro: parseSectionIntro(coreSection, 3),
    specializations: parseStudyChapters(specializationSection, "specializations"),
    specializationIntro: parseSectionIntro(specializationSection, 3),
    support: {
      guide: guideSupport,
      map: guideSupport,
      portfolio: parseSupportSection(portfolioSection),
      reference: referenceSupport.reference,
      sources: referenceSupport.sources
    }
  };
}

function splitReferenceSupport(support) {
  if (!support) return { reference: null, sources: null };

  const isSourcesBlock = (block) => /official sources/i.test(block.title);
  const referenceBlocks = support.blocks.filter((block) => !isSourcesBlock(block));
  const sourceBlocks = support.blocks.filter(isSourcesBlock).map((block) => ({
    ...block,
    title: stripSectionNumber(block.title)
  }));

  return {
    reference: {
      ...support,
      title: "Reference",
      blocks: referenceBlocks
    },
    sources: {
      ...support,
      id: \`\${support.id}-sources\`,
      title: "Official Sources",
      intro: support.intro,
      blocks: sourceBlocks
    }
  };
}

function parseH2Sections(lines) {
  const starts = [];
  lines.forEach((line, position) => {
    const match = line.text.match(/^##\\s+(.+)$/);
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  return starts.map((start, position) => {
    const end = starts[position + 1]?.position ?? lines.length;
    return {
      id: uniqueSlug(start.title, start.index),
      title: start.title,
      startLine: start.index + 1,
      lines: lines.slice(start.position + 1, end)
    };
  });
}

function findH2(sections, pattern) {
  return sections.find((section) => pattern.test(section.title));
}

function parseSectionIntro(section, childLevel) {
  if (!section) return [];
  const child = new RegExp(\`^#{\${childLevel}}\\\\s+\`);
  const firstChild = section.lines.findIndex((line) => child.test(line.text));
  return firstChild === -1 ? section.lines : section.lines.slice(0, firstChild);
}

function parseStudyChapters(section, kind) {
  if (!section) return [];

  const starts = [];
  section.lines.forEach((line, position) => {
    const match = line.text.match(/^###\\s+(.+)$/);
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  return starts.map((start, position) => {
    const end = starts[position + 1]?.position ?? section.lines.length;
    const body = section.lines.slice(start.position + 1, end);
    const sections = parseSubsections(body, start.title);
    return {
      id: uniqueSlug(\`\${kind}-\${start.title}\`, start.index),
      kind,
      title: start.title,
      startLine: start.index + 1,
      intro: parseSectionIntro({ lines: body }, 4),
      sections
    };
  });
}

function parseSubsections(lines, fallbackTitle) {
  const starts = [];
  lines.forEach((line, position) => {
    const match = line.text.match(/^####\\s+(.+)$/);
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  if (!starts.length) {
    return [
      {
        id: uniqueSlug(fallbackTitle, lines[0]?.index ?? 0),
        title: "Overview",
        lines
      }
    ];
  }

  return starts.map((start, position) => {
    const end = starts[position + 1]?.position ?? lines.length;
    return {
      id: uniqueSlug(start.title, start.index),
      title: start.title,
      lines: lines.slice(start.position + 1, end)
    };
  });
}

function parseSupportSection(section) {
  if (!section) return null;

  const intro = parseSectionIntro(section, 3);
  const starts = [];
  section.lines.forEach((line, position) => {
    const match = line.text.match(/^###\\s+(.+)$/);
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  const blocks = starts.map((start, position) => {
    const end = starts[position + 1]?.position ?? section.lines.length;
    return {
      id: uniqueSlug(start.title, start.index),
      title: start.title,
      lines: section.lines.slice(start.position + 1, end)
    };
  });

  return {
    id: section.id,
    title: stripSectionNumber(section.title),
    description: "",
    intro,
    blocks
  };
}

function stripSectionNumber(title) {
  return title.replace(/^\\d+(?:\\.\\d+)*\\.?\\s+/, "");
}

function uniqueSlug(text, index) {
  const slug = text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\\w\\s-]/g, "")
    .trim()
    .replace(/\\s+/g, "-")
    .slice(0, 72);
  return \`\${slug || "section"}-\${index}\`;
}
`,s=`const DEFAULT_JOURNAL_EXPORT_DAYS = 30;
const MAX_JOURNAL_EXPORT_DAYS = 3650;

function isValidJournalExportRange(value) {
  return normalizedJournalExportDays(value) !== null;
}

function normalizedJournalExportDays(value) {
  const days = Number(value);
  if (!Number.isInteger(days) || days < 1 || days > MAX_JOURNAL_EXPORT_DAYS) return null;
  return days;
}

function getJournalExportDays() {
  return normalizedJournalExportDays(state.journalExportRange) || DEFAULT_JOURNAL_EXPORT_DAYS;
}

function createDefaultState() {
  return {
    checked: {},
    favorites: {},
    dates: {},
    reviewComplete: {},
    portfolio: {},
    custom: [],
    journal: [],
    activity: [],
    tab: "core",
    query: "",
    level: "all",
    journalTypeFilter: "all",
    journalExportRange: "30",
    journalLinkFilter: "",
    journalTagFilter: "",
    selected: {
      core: "",
      specializations: ""
    },
    specializationTrack: "",
    view: "overview"
  };
}

function normalizeState(saved) {
  const fallback = createDefaultState();

  try {
    const validTabs = ["core", "specializations", "favorites", "custom"];
    return {
      checked: saved?.checked && typeof saved.checked === "object" ? saved.checked : {},
      favorites: saved?.favorites && typeof saved.favorites === "object" ? saved.favorites : {},
      dates: saved?.dates && typeof saved.dates === "object" ? saved.dates : {},
      reviewComplete: saved?.reviewComplete && typeof saved.reviewComplete === "object" ? saved.reviewComplete : {},
      portfolio: saved?.portfolio && typeof saved.portfolio === "object" ? saved.portfolio : {},
      custom: Array.isArray(saved?.custom) ? saved.custom.filter(isValidCustomTopic) : [],
      journal: Array.isArray(saved?.journal) ? saved.journal.map(normalizeJournalEntry).filter(Boolean) : [],
      activity: Array.isArray(saved?.activity) ? saved.activity.map(normalizeJournalActivityEvent).filter(Boolean) : [],
      tab: validTabs.includes(saved?.tab) ? saved.tab : "core",
      query: typeof saved?.query === "string" ? saved.query : "",
      level: ["all", "0", "1", "2", "3"].includes(saved?.level) ? saved.level : "all",
      journalTypeFilter: ["all", "notes", "activity"].includes(saved?.journalTypeFilter) ? saved.journalTypeFilter : "all",
      journalExportRange: isValidJournalExportRange(saved?.journalExportRange) ? saved.journalExportRange : "30",
      journalLinkFilter: typeof saved?.journalLinkFilter === "string" ? saved.journalLinkFilter : "",
      journalTagFilter: typeof saved?.journalTagFilter === "string" ? saved.journalTagFilter : "",
      selected: {
        core: saved?.selected?.core || "",
        specializations: saved?.selected?.specializations || ""
      },
      specializationTrack: typeof saved?.specializationTrack === "string" ? saved.specializationTrack : "",
      view: ["overview", "track", "chapter", "map", "guide", "review", "journal", "portfolio", "reference", "sources"].includes(saved?.view)
        ? saved.view
        : "overview"
    };
  } catch {
    return fallback;
  }
}

async function loadState() {
  const saved = await loadPersistedState();
  return normalizeState(saved);
}

function saveState() {
  const snapshot = normalizeState(state);
  return savePersistedState(snapshot);
}
`,c=`function getActiveChapters() {
  if (state.tab === "favorites" || state.tab === "custom") return [];
  return state.tab === "specializations" ? roadmap.specializations : roadmap.core;
}

function getVisibleChapters() {
  const query = state.query.trim().toLowerCase();

  return getActiveChapters().filter((chapter) => {
    if (query && !chapterSearchText(chapter).includes(query)) return false;
    return chapterMatchesLevel(chapter);
  });
}

function getSpecializationTracks(chapters = roadmap.specializations) {
  const tracks = new Map();

  chapters.forEach((chapter) => {
    const parsed = parseSpecializationChapterTitle(chapter.title);
    const code = parsed?.track || "Other";
    const id = code === "Other" ? "track-other" : \`track-\${code.toLowerCase()}\`;
    if (!tracks.has(id)) {
      tracks.set(id, {
        id,
        code,
        title: SPECIALIZATION_TRACK_NAMES[code] || "Other Specializations",
        chapters: []
      });
    }
    tracks.get(id).chapters.push(chapter);
  });

  return Array.from(tracks.values());
}

function getSpecializationTrackById(chapters, id) {
  return getSpecializationTracks(chapters).find((track) => track.id === id) || null;
}

function getSpecializationTrackForChapter(chapter) {
  return getSpecializationTracks([chapter])[0] || null;
}

function parseSpecializationChapterTitle(title) {
  const match = title.match(/^Track\\s+([A-Z])\\.(\\d+):\\s*(.+)$/i);
  if (!match) return null;
  return {
    track: match[1].toUpperCase(),
    chapter: match[2],
    shortTitle: match[3]
  };
}

function parseCoreChapterTitle(title) {
  const match = title.match(/^Phase\\s+(\\d+):\\s*(.+)$/i);
  if (!match) return null;
  return {
    chapter: match[1],
    shortTitle: match[2]
  };
}

function specializationTrackHeading(track) {
  return track.title;
}

function specializationChapterLabel(chapter) {
  const parsed = parseSpecializationChapterTitle(chapter.title);
  return parsed ? \`\${parsed.chapter}. \${parsed.shortTitle}\` : chapter.title;
}

function coreChapterLabel(chapter) {
  const parsed = parseCoreChapterTitle(chapter.title);
  return parsed ? \`\${parsed.chapter}. \${parsed.shortTitle}\` : chapter.title;
}

function displayChapterTitle(chapter) {
  if (chapter?.kind === "specializations") return specializationChapterLabel(chapter);
  if (chapter?.kind === "core") return coreChapterLabel(chapter);
  return chapter?.title || "";
}

function chapterSearchText(chapter) {
  const specializationTrack = chapter.kind === "specializations" ? getSpecializationTrackForChapter(chapter) : null;
  return [
    specializationTrack ? specializationTrackHeading(specializationTrack) : "",
    displayChapterTitle(chapter),
    chapter.title,
    ...chapter.intro.map((line) => line.text),
    ...chapter.sections.flatMap((section) => [
      section.title,
      ...section.lines.map((line) => line.text)
    ])
  ]
    .join(" ")
    .toLowerCase();
}

function chapterMatchesLevel(chapter) {
  const level = selectedLevel();
  if (level === null) return true;
  return getChapterKeys(chapter).some((key) => getLevel(key) === level);
}

function selectedLevel() {
  return state.level === "all" ? null : Number(state.level);
}

function ensureSelection(visible) {
  const selected = state.selected[state.tab];
  if (!visible.length) {
    state.selected[state.tab] = "";
    if (state.tab === "specializations") state.specializationTrack = "";
    state.view = state.view === "chapter" ? "overview" : state.view;
    return;
  }

  if (!selected || !visible.some((chapter) => chapter.id === selected)) {
    state.selected[state.tab] = visible[0].id;
  }
}

function ensureSpecializationTrack(visible) {
  const tracks = getSpecializationTracks(visible);
  if (!tracks.length) {
    state.specializationTrack = "";
    state.view = state.view === "track" ? "overview" : state.view;
    return;
  }

  if (state.view === "chapter") {
    const selectedChapter = visible.find((chapter) => chapter.id === state.selected.specializations);
    const selectedTrack = selectedChapter ? getSpecializationTrackForChapter(selectedChapter) : null;
    if (selectedTrack) state.specializationTrack = selectedTrack.id;
  }

  if (!state.specializationTrack || !tracks.some((track) => track.id === state.specializationTrack)) {
    state.specializationTrack = tracks[0].id;
  }
}

function tabTitle() {
  if (state.tab === "favorites") return "Plan";
  return state.tab === "specializations" ? "Specializations" : "Core Curriculum";
}

function tabIntro() {
  if (state.tab === "favorites") {
    return "Pin roadmap, custom, or portfolio items to keep a focused personal study plan.";
  }
  if (state.tab === "custom") {
    return "Add your own learning topics and track them alongside the roadmap.";
  }
  const lines = state.tab === "specializations" ? roadmap.specializationIntro : roadmap.coreIntro;
  const description = lines.map((line) => line.text.trim()).filter(Boolean).join(" ");
  if (state.tab === "specializations") {
    const instruction = "Open a specialization track first, then choose the chapters inside it.";
    return description ? \`\${description} \${instruction}\` : instruction;
  }
  return description;
}

function sourceLabel(tab) {
  if (tab === "custom") return "Custom";
  if (tab === "portfolio") return "Portfolio";
  return tab === "specializations" ? "Specializations" : "Core Curriculum";
}

function excerptFor(chapter) {
  const intro = chapter.intro.find((line) => line.text.trim());
  if (intro) return trimText(cleanInline(intro.text), 140);

  const sectionLine = chapter.sections
    .flatMap((item) => item.lines)
    .find((line) => line.text.trim() && !isTrackableLine(line.text));
  if (sectionLine) return trimText(cleanInline(sectionLine.text), 140);

  return \`\${chapter.sections.length} subchapters\`;
}

function specializationTrackExcerpt(track) {
  const chapterNames = track.chapters
    .map((chapter) => specializationChapterLabel(chapter))
    .slice(0, 3);
  const suffix = track.chapters.length > chapterNames.length ? "..." : "";
  return trimText(\`\${chapterNames.join("; ")}\${suffix}\`, 180);
}
`,l=`function getLevel(key) {
  const value = state.checked[key];
  if (value === true) return 3;
  if (typeof value === "number" && value >= 1 && value <= 3) return value;
  return 0;
}

function nextLevel(level) {
  return level >= 3 ? 0 : level + 1;
}

function cycleKeyLevel(key) {
  setKeyLevel(key, nextLevel(getLevel(key)));
}

function setKeyLevel(key, level, options = {}) {
  const previousLevel = getLevel(key);
  const normalizedLevel = level >= 1 && level <= 3 ? level : 0;
  if (normalizedLevel > 0) {
    state.checked[key] = normalizedLevel;
    updateLevelDate(key, normalizedLevel);
  } else {
    delete state.checked[key];
  }
  if (options.log === false || previousLevel === normalizedLevel) return;
  logJournalLevelChange(key, normalizedLevel, options);
}

function setKeysLevel(keys, level, options = {}) {
  const normalizedKeys = Array.from(new Set((keys || []).filter(Boolean)));
  const previousLevels = new Map(normalizedKeys.map((key) => [key, getLevel(key)]));
  normalizedKeys.forEach((key) => {
    setKeyLevel(key, level, { log: false });
  });
  const changedKeys = normalizedKeys.filter((key) => previousLevels.get(key) !== getLevel(key));
  if (options.log === false || !changedKeys.length) return;
  logJournalLevelBatchChange(changedKeys, getLevel(changedKeys[0]), options);
}

function isReviewComplete(key) {
  return Boolean(state.reviewComplete?.[key]);
}

function setReviewComplete(key, complete) {
  if (!state.reviewComplete || typeof state.reviewComplete !== "object") state.reviewComplete = {};
  if (complete) {
    state.reviewComplete[key] = true;
  } else {
    delete state.reviewComplete[key];
  }
}

function portfolioKey(block, line) {
  return \`portfolio:\${block.id}:\${line.index}\`;
}

function portfolioInputId(key) {
  return \`input-\${key.replace(/[^\\w-]/g, "-")}\`;
}

function cleanPortfolioText(text) {
  return text.replace(/\\{\\{refs?:[^}]+\\}\\}/gi, "").trim();
}

function getPortfolioReferences(text) {
  const labels = [cleanPortfolioText(text)];
  const explicitLabels = Array.from(text.matchAll(/\\{\\{refs?:([^}]+)\\}\\}/gi))
    .flatMap((match) => match[1].split(";"))
    .map((item) => item.trim())
    .filter(Boolean);
  const aliases = getPortfolioReferenceAliases(cleanPortfolioText(text));
  labels.push(...explicitLabels, ...aliases);

  const index = getRoadmapDeliverableIndex();
  const references = new Map();
  labels.forEach((label) => {
    const matches = index.get(normalizeReferenceLabel(label)) || [];
    matches.forEach((match) => references.set(match.key, match));
  });
  return Array.from(references.values());
}

function getPortfolioReferenceAliases(text) {
  const normalized = normalizeReferenceLabel(text);
  for (const [source, aliases] of Object.entries(PORTFOLIO_REFERENCE_ALIASES)) {
    if (normalizeReferenceLabel(source) === normalized) return aliases;
  }
  return [];
}

function getRoadmapDeliverableIndex() {
  const index = new Map();
  [...roadmap.core, ...roadmap.specializations].forEach((chapter) => {
    chapter.sections.forEach((section) => {
      if (!/deliverables/i.test(section.title)) return;
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const itemText = line.text.replace(/^\\s*(?:[-*]|\\d+\\.)\\s+/, "");
        const key = lineKey(chapter, section, line);
        const reference = {
          key,
          chapter,
          section,
          line,
          itemText,
          sourceTab: chapter.kind === "specializations" ? "specializations" : "core"
        };
        const normalized = normalizeReferenceLabel(itemText);
        if (!index.has(normalized)) index.set(normalized, []);
        index.get(normalized).push(reference);
      });
    });
  });
  return index;
}

function normalizeReferenceLabel(text) {
  return plainText(cleanPortfolioText(text))
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9åäöéü]+/gi, " ")
    .trim()
    .replace(/\\s+/g, " ");
}

function supportBlockAnchor(crumb, block) {
  return \`\${crumb.toLowerCase()}-\${block.id}\`;
}

function setPortfolioComplete(key, complete, references = [], options = {}) {
  if (!state.portfolio || typeof state.portfolio !== "object") state.portfolio = {};
  const wasComplete = Boolean(state.portfolio[key]);
  if (complete) {
    state.portfolio[key] = true;
    references.forEach((reference) => setKeyLevel(reference.key, 3, { log: false }));
    if (!wasComplete) logJournalPortfolioComplete(key, options);
  } else {
    delete state.portfolio[key];
  }
}

function getLevelDates(key) {
  const dates = state.dates?.[key];
  if (!dates || typeof dates !== "object") return {};
  return dates;
}

function updateLevelDate(key, level, options = {}) {
  if (level < 1 || level > 3) return;
  setLevelDate(key, level, todayDate());
  if (options.log) logJournalDateReset(key, level, options);
}

function setLevelDate(key, level, value) {
  if (level < 1 || level > 3 || !isValidDate(value)) return;
  if (!state.dates || typeof state.dates !== "object") state.dates = {};
  state.dates[key] = {
    ...getLevelDates(key),
    [level]: value
  };
}

function isValidDate(value) {
  return Number.isFinite(dayNumber(value));
}

function todayDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return \`\${year}-\${month}-\${day}\`;
}

function ageInDays(value) {
  const current = dayNumber(todayDate());
  const itemDate = dayNumber(value);
  if (!Number.isFinite(itemDate)) return Infinity;
  return Math.max(0, current - itemDate);
}

function dayNumber(value) {
  const match = String(value).match(/^(\\d{4})-(\\d{2})-(\\d{2})$/);
  if (!match) return Infinity;
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) / 86400000;
}

function formatDate(value) {
  const match = String(value).match(/^(\\d{4})-(\\d{2})-(\\d{2})$/);
  if (!match) return value;
  return \`\${match[1]}-\${match[2]}-\${match[3]}\`;
}

function chapterKey(chapter) {
  return \`chapter:\${chapter.id}\`;
}

function sectionKey(chapter, section) {
  return \`section:\${chapter.id}:\${section.id}\`;
}

function lineKey(chapter, section, line) {
  return \`line:\${chapter.id}:\${section.id}:\${line.index}\`;
}

function isTrackableLine(line) {
  return /^(\\s*[-*]\\s+|\\s*\\d+\\.\\s+)/.test(line);
}
`,d=`function getFavoriteProgress() {
  const favorites = getFavoriteItems();
  const counts = favorites.reduce(
    (acc, favorite) => {
      if (favorite.sourceTab === "portfolio") {
        acc.done += state.portfolio?.[favorite.key] ? 1 : 0;
        acc.total += 1;
      } else {
        acc.done += getLevel(favorite.key);
        acc.total += 3;
      }
      return acc;
    },
    { done: 0, total: 0 }
  );
  return progressFromCounts(counts.done, counts.total);
}

function getPortfolioProgress() {
  const keys = [];
  roadmap.support.portfolio?.blocks.forEach((block) => {
    block.lines.forEach((line) => {
      if (/^\\s*[-*]\\s+/.test(line.text)) keys.push(portfolioKey(block, line));
    });
  });
  const done = keys.reduce((sum, key) => sum + (state.portfolio?.[key] ? 1 : 0), 0);
  return progressFromCounts(done, keys.length);
}

function getCustomProgress() {
  const items = getVisibleCustomItems();
  const done = items.reduce((sum, item) => sum + getLevel(item.key), 0);
  return progressFromCounts(done, items.length * 3);
}

function getProgressForChapters(chapters) {
  const keys = chapters.flatMap(getChapterKeys);
  const done = keys.reduce((sum, key) => sum + getLevel(key), 0);
  return progressFromCounts(done, keys.length * 3);
}

function getChapterProgress(chapter) {
  const keys = getChapterKeys(chapter);
  const done = keys.reduce((sum, key) => sum + getLevel(key), 0);
  return progressFromCounts(done, keys.length * 3);
}

function getSectionProgress(chapter, section) {
  const keys = getSectionKeys(chapter, section);
  const done = keys.reduce((sum, key) => sum + getLevel(key), 0);
  return progressFromCounts(done, keys.length * 3);
}

function progressFromCounts(done, total) {
  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
    level: averageLevel(done, total)
  };
}

function averageLevel(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 3);
}

function getChapterKeys(chapter) {
  const keys = chapter.sections.flatMap((section) => getSectionKeys(chapter, section));
  return keys.length ? keys : [chapterKey(chapter)];
}

function getSectionKeys(chapter, section) {
  const keys = [sectionKey(chapter, section)];
  section.lines.forEach((line) => {
    if (isTrackableLine(line.text)) keys.push(lineKey(chapter, section, line));
  });
  return keys;
}

function getVisibleSectionKeys(chapter, section) {
  const level = selectedLevel();
  const keys = getSectionKeys(chapter, section);
  if (level === null) return keys;
  return keys.filter((key) => getLevel(key) === level);
}
`,u=`function getVisibleCustomItems() {
  const query = state.query.trim().toLowerCase();
  const level = selectedLevel();

  return getCustomItems().filter((item) => {
    if (level !== null && getLevel(item.key) !== level) return false;
    if (!query) return true;
    return customItemSearchText(item).includes(query);
  });
}

function getCustomItems() {
  return state.custom.map(customToStudyItem);
}

function groupCustomItems(items) {
  const groups = new Map();
  items.forEach((item) => {
    const title = item.section.title;
    if (!groups.has(title)) groups.set(title, []);
    groups.get(title).push(item);
  });
  return Array.from(groups, ([title, groupItems]) => ({ title, items: groupItems }));
}

function customAreaAnchor(title) {
  return \`custom-\${uniqueSlug(title, 0)}\`;
}

function customToStudyItem(topic) {
  const key = customTopicKey(topic.id);
  const rawArea = typeof topic.area === "string" ? topic.area : "";
  const area = rawArea.trim() || "Custom Topics";
  return {
    key,
    topic,
    chapter: {
      id: "custom",
      title: "Custom"
    },
    section: {
      id: uniqueSlug(area, 0),
      title: area
    },
    line: null,
    itemText: topic.title,
    sourceTab: "custom",
    level: getLevel(key),
    date: getLevelDates(key)[getLevel(key)] || ""
  };
}

function customItemSearchText(item) {
  return [
    sourceLabel(item.sourceTab),
    item.chapter.title,
    item.section.title,
    item.itemText,
    item.date,
    \`level \${item.level}\`
  ].join(" ").toLowerCase();
}

function addCustomTopic(title, area) {
  const cleanTitle = title.trim();
  if (!cleanTitle) return;
  state.custom.push({
    id: createCustomId(),
    title: cleanTitle,
    area: area.trim()
  });
}

function editCustomTopic(topic) {
  const title = window.prompt("Topic", topic.title);
  if (title === null) return;
  const cleanTitle = title.trim();
  if (!cleanTitle) return;
  const area = window.prompt("Area", topic.area || "");
  if (area === null) return;
  topic.title = cleanTitle;
  topic.area = area.trim();
  render();
}

function deleteCustomTopic(id) {
  const topic = state.custom.find((item) => item.id === id);
  if (!topic || !window.confirm(\`Delete "\${topic.title}"?\`)) return;
  const key = customTopicKey(id);
  state.custom = state.custom.filter((item) => item.id !== id);
  delete state.checked[key];
  delete state.favorites[key];
  delete state.dates[key];
  delete state.reviewComplete[key];
  render();
}

function createCustomId() {
  return \`custom-\${Date.now().toString(36)}-\${Math.random().toString(36).slice(2, 8)}\`;
}

function customTopicKey(id) {
  return \`custom:\${id}\`;
}

function isValidCustomTopic(topic) {
  return topic && typeof topic.id === "string" && typeof topic.title === "string" && topic.title.trim();
}
`,p=`function getFavoriteItems() {
  const query = state.query.trim().toLowerCase();
  const level = selectedLevel();
  const allChapters = [...roadmap.core, ...roadmap.specializations];
  const items = [];

  allChapters.forEach((chapter) => {
    chapter.sections.forEach((section) => {
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const key = lineKey(chapter, section, line);
        if (!state.favorites[key]) return;
        if (level !== null && getLevel(key) !== level) return;
        const itemText = line.text.replace(/^\\s*(?:[-*]|\\d+\\.)\\s+/, "");
        const sourceTab = chapter.kind === "specializations" ? "specializations" : "core";
        const favorite = { key, chapter, section, line, itemText, sourceTab };
        if (query && !favoriteSearchText(favorite).includes(query)) return;
        items.push(favorite);
      });
    });
  });

  getCustomItems().forEach((item) => {
    if (!state.favorites[item.key]) return;
    if (level !== null && getLevel(item.key) !== level) return;
    if (query && !favoriteSearchText(item).includes(query)) return;
    items.push(item);
  });

  getPortfolioItems().forEach((item) => {
    if (!state.favorites[item.key]) return;
    if (level !== null && level !== 0) return;
    if (query && !favoriteSearchText(item).includes(query)) return;
    items.push(item);
  });

  return items;
}

function getPortfolioItems() {
  const support = roadmap.support.portfolio;
  if (!support) return [];

  const chapter = {
    id: "portfolio",
    title: "Portfolio"
  };
  const items = [];

  support.blocks.forEach((block) => {
    block.lines.forEach((line) => {
      const bullet = line.text.match(/^\\s*[-*]\\s+(.+)$/);
      if (!bullet) return;
      const key = portfolioKey(block, line);
      const itemText = cleanPortfolioText(bullet[1]);
      items.push({
        key,
        chapter,
        section: {
          id: block.id,
          title: block.title
        },
        line,
        itemText,
        references: getPortfolioReferences(bullet[1]),
        sourceTab: "portfolio",
        complete: Boolean(state.portfolio?.[key])
      });
    });
  });

  return items;
}

function favoriteSearchText(favorite) {
  const track = favorite.sourceTab === "specializations" ? getSpecializationTrackForChapter(favorite.chapter) : null;
  return [
    sourceLabel(favorite.sourceTab),
    track ? specializationTrackHeading(track) : "",
    displayChapterTitle(favorite.chapter),
    favorite.section.title,
    favorite.itemText
  ].join(" ").toLowerCase();
}

function favoriteContext(favorite) {
  if (favorite.sourceTab === "portfolio") {
    return \`\${sourceLabel(favorite.sourceTab)} / \${favorite.section.title}\`;
  }
  if (favorite.sourceTab === "specializations") {
    const track = getSpecializationTrackForChapter(favorite.chapter);
    return \`\${sourceLabel(favorite.sourceTab)} / \${specializationTrackHeading(track)} / \${displayChapterTitle(favorite.chapter)} / \${favorite.section.title}\`;
  }
  return \`\${sourceLabel(favorite.sourceTab)} / \${displayChapterTitle(favorite.chapter)} / \${favorite.section.title}\`;
}

function getReviewItems() {
  const query = state.query.trim().toLowerCase();
  const items = [];

  [...roadmap.core, ...roadmap.specializations].forEach((chapter) => {
    chapter.sections.forEach((section) => {
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const key = lineKey(chapter, section, line);
        const level = getLevel(key);
        if (!level) return;

        const itemText = line.text.replace(/^\\s*(?:[-*]|\\d+\\.)\\s+/, "");
        const sourceTab = chapter.kind === "specializations" ? "specializations" : "core";
        const item = {
          key,
          chapter,
          section,
          line,
          itemText,
          sourceTab,
          level,
          date: getLevelDates(key)[level] || ""
        };
        if (query && !reviewItemSearchText(item).includes(query)) return;
        items.push(item);
      });
    });
  });

  getCustomItems().forEach((item) => {
    if (!item.level) return;
    if (query && !reviewItemSearchText(item).includes(query)) return;
    items.push(item);
  });

  return items.sort(compareReviewItems);
}

function reviewItemSearchText(item) {
  const track = item.sourceTab === "specializations" ? getSpecializationTrackForChapter(item.chapter) : null;
  return [
    sourceLabel(item.sourceTab),
    track ? specializationTrackHeading(track) : "",
    displayChapterTitle(item.chapter),
    item.section.title,
    item.itemText,
    item.date,
    \`level \${item.level}\`
  ].join(" ").toLowerCase();
}

function compareReviewItems(left, right) {
  const leftTime = dayNumber(left.date);
  const rightTime = dayNumber(right.date);
  if (leftTime !== rightTime) return leftTime - rightTime;
  return reviewItemSearchText(left).localeCompare(reviewItemSearchText(right));
}

function getReviewBuckets() {
  const buckets = REVIEW_BUCKETS.map((bucket) => ({ ...bucket, items: [] }));
  const fallback = buckets.find((bucket) => bucket.id === "no-date");
  const complete = buckets.find((bucket) => bucket.id === "complete");

  getReviewItems().forEach((item) => {
    if (isReviewComplete(item.key)) {
      complete.items.push(item);
      return;
    }

    const age = item.date ? ageInDays(item.date) : null;
    const bucket = buckets.find((candidate) => {
      if (candidate.id === "complete") return false;
      if (candidate.id === "no-date") return !item.date;
      return item.date && age >= candidate.minDays && age <= candidate.maxDays;
    }) || fallback;
    bucket.items.push(item);
  });

  return buckets;
}
`,m=`function getJournalEntries() {
  const query = state.query.trim().toLowerCase();
  const typeFilter = getActiveJournalTypeFilter();
  const linkFilter = getActiveJournalLinkFilter();
  const tagFilter = getActiveJournalTagFilter();
  if (typeFilter === "activity") return [];
  return state.journal
    .map(normalizeJournalEntry)
    .filter(Boolean)
    .filter((entry) => !linkFilter || entry.linkedItemKeys.includes(linkFilter))
    .filter((entry) => !tagFilter || journalEntryHasTag(entry, tagFilter))
    .filter((entry) => !query || journalEntrySearchText(entry).includes(query))
    .sort(compareJournalEntries);
}

function getJournalActivityEvents() {
  const query = state.query.trim().toLowerCase();
  const typeFilter = getActiveJournalTypeFilter();
  const linkFilter = getActiveJournalLinkFilter();
  const tagFilter = getActiveJournalTagFilter();
  if (typeFilter === "notes") return [];
  return (state.activity || [])
    .map(normalizeJournalActivityEvent)
    .filter(Boolean)
    .filter((event) => !linkFilter || journalActivityEventKeys(event).includes(linkFilter))
    .filter(() => !tagFilter)
    .filter((event) => !query || journalActivitySearchText(event).includes(query))
    .sort(compareJournalActivityEvents);
}

function getJournalTimelineItems() {
  return [
    ...getJournalEntries().map((entry) => ({
      type: "note",
      id: \`note:\${entry.id}\`,
      date: entry.date,
      sortTime: entry.createdAt,
      entry
    })),
    ...getJournalActivityEvents().map((event) => ({
      type: "activity",
      id: \`activity:\${event.id}\`,
      date: event.date,
      sortTime: event.occurredAt,
      event
    }))
  ].sort(compareJournalTimelineItems);
}

function normalizeJournalEntry(entry) {
  if (!entry || typeof entry.id !== "string") return null;

  const title = typeof entry.title === "string" ? entry.title.trim() : "";
  if (!title) return null;

  const date = isValidDate(entry.date) ? entry.date : todayDate();
  const type = JOURNAL_TYPES.includes(entry.type) ? entry.type : JOURNAL_TYPES[0];
  const linkedItemKeys = Array.isArray(entry.linkedItemKeys)
    ? entry.linkedItemKeys.filter((key) => typeof key === "string" && key)
    : [];
  const tags = Array.isArray(entry.tags)
    ? entry.tags.map((tag) => String(tag).trim()).filter(Boolean)
    : [];

  return {
    id: entry.id,
    title,
    subtitle: typeof entry.subtitle === "string" ? entry.subtitle.trim() : "",
    subtitleSource: normalizeJournalSubtitleSource(entry),
    body: typeof entry.body === "string" ? entry.body : "",
    date,
    type,
    linkedItemKeys,
    tags,
    createdAt: typeof entry.createdAt === "string" ? entry.createdAt : new Date().toISOString(),
    updatedAt: typeof entry.updatedAt === "string" ? entry.updatedAt : new Date().toISOString()
  };
}

function normalizeJournalActivityEvent(event) {
  if (!event || typeof event !== "object" || typeof event.id !== "string") return null;

  const message = typeof event.message === "string" ? event.message.trim() : "";
  if (!message) return null;

  const occurredAt = typeof event.occurredAt === "string" ? event.occurredAt : new Date().toISOString();
  const date = isValidDate(event.date) ? event.date : todayDate();
  const itemKey = typeof event.itemKey === "string" ? event.itemKey : "";
  const itemKeys = Array.isArray(event.itemKeys)
    ? event.itemKeys.filter((key) => typeof key === "string" && key)
    : [];

  return {
    id: event.id,
    kind: typeof event.kind === "string" ? event.kind : "activity",
    message,
    date,
    occurredAt,
    itemKey,
    itemKeys,
    context: typeof event.context === "string" ? event.context.trim() : ""
  };
}

function normalizeJournalSubtitleSource(entry) {
  const subtitle = typeof entry?.subtitle === "string" ? entry.subtitle.trim() : "";
  if (!subtitle) return "";
  return entry?.subtitleSource === "link" ? "link" : "manual";
}

function createJournalEntry(data) {
  const now = new Date().toISOString();
  const entry = normalizeJournalEntry({
    id: createJournalId(),
    createdAt: now,
    updatedAt: now,
    ...data
  });
  if (!entry) return null;
  state.journal.push(entry);
  return entry;
}

function updateJournalEntry(id, data) {
  const index = state.journal.findIndex((entry) => entry.id === id);
  if (index < 0) return;

  const updated = normalizeJournalEntry({
    ...state.journal[index],
    ...data,
    id,
    updatedAt: new Date().toISOString()
  });
  if (!updated) return;
  state.journal[index] = updated;
}

function deleteJournalEntry(id) {
  const entry = state.journal.find((item) => item.id === id);
  if (!entry || !window.confirm(\`Delete "\${entry.title}"?\`)) return;
  removeJournalEntry(id);
  render();
}

function removeJournalEntry(id) {
  state.journal = state.journal.filter((item) => item.id !== id);
}

function deleteJournalActivityEvent(id) {
  const event = (state.activity || []).find((item) => item?.id === id);
  if (!event || !window.confirm("Delete this activity event?")) return;
  removeJournalActivityEvent(id);
  render();
}

function removeJournalActivityEvent(id) {
  state.activity = (state.activity || []).filter((item) => item?.id !== id);
}

function createJournalId() {
  return \`journal-\${Date.now().toString(36)}-\${Math.random().toString(36).slice(2, 8)}\`;
}

function parseJournalTags(value) {
  return String(value)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function compareJournalEntries(left, right) {
  const dateDiff = dayNumber(right.date) - dayNumber(left.date);
  if (dateDiff) return dateDiff;
  const createdDiff = String(right.createdAt).localeCompare(String(left.createdAt));
  if (createdDiff) return createdDiff;
  return String(right.id).localeCompare(String(left.id));
}

function compareJournalActivityEvents(left, right) {
  const dateDiff = dayNumber(right.date) - dayNumber(left.date);
  if (dateDiff) return dateDiff;
  const timeDiff = String(right.occurredAt).localeCompare(String(left.occurredAt));
  if (timeDiff) return timeDiff;
  return String(right.id).localeCompare(String(left.id));
}

function compareJournalTimelineItems(left, right) {
  const dateDiff = dayNumber(right.date) - dayNumber(left.date);
  if (dateDiff) return dateDiff;
  const timeDiff = String(right.sortTime || "").localeCompare(String(left.sortTime || ""));
  if (timeDiff) return timeDiff;
  return String(right.id).localeCompare(String(left.id));
}

function journalEntrySearchText(entry) {
  return [
    entry.title,
    entry.subtitle,
    entry.body,
    entry.type,
    entry.date,
    entry.tags.join(" "),
    ...entry.linkedItemKeys.map((key) => journalTargetSearchText(key))
  ].join(" ").toLowerCase();
}

function journalActivitySearchText(event) {
  return [
    event.message,
    event.context,
    event.kind,
    event.date,
    ...journalActivityEventKeys(event).map((key) => journalTargetSearchText(key))
  ].join(" ").toLowerCase();
}

function journalActivityEventKeys(event) {
  return Array.from(new Set([
    event.itemKey,
    ...(event.itemKeys || [])
  ].filter(Boolean)));
}

function createJournalActivityEvent(data) {
  if (!state.activity || !Array.isArray(state.activity)) state.activity = [];
  const event = normalizeJournalActivityEvent({
    id: createJournalActivityId(),
    occurredAt: new Date().toISOString(),
    date: todayDate(),
    ...data
  });
  if (!event) return null;
  state.activity.push(event);
  return event;
}

function createJournalActivityId() {
  return \`activity-\${Date.now().toString(36)}-\${Math.random().toString(36).slice(2, 8)}\`;
}

function journalActivityTarget(key, fallbackLabel = "") {
  const target = getJournalTarget(key);
  if (!target) {
    return {
      label: String(fallbackLabel || key).trim(),
      context: ""
    };
  }
  return {
    label: plainText(target.itemText).trim(),
    context: journalTargetContext(target)
  };
}

function logJournalLevelChange(key, level, options = {}) {
  const target = journalActivityTarget(key, options.label);
  const message = level
    ? \`Set \${target.label} to level \${level}\`
    : \`Cleared level for \${target.label}\`;
  return createJournalActivityEvent({
    kind: "level-change",
    itemKey: key,
    message,
    context: target.context
  });
}

function logJournalLevelBatchChange(keys, level, options = {}) {
  const normalizedKeys = Array.from(new Set((keys || []).filter(Boolean)));
  if (!normalizedKeys.length) return null;
  const label = String(options.label || "selected items").trim();
  const count = normalizedKeys.length;
  const message = level
    ? \`Set \${count} \${count === 1 ? "item" : "items"} in \${label} to level \${level}\`
    : \`Cleared level for \${count} \${count === 1 ? "item" : "items"} in \${label}\`;
  return createJournalActivityEvent({
    kind: "level-batch",
    itemKeys: normalizedKeys,
    message
  });
}

function logJournalDateReset(key, level, options = {}) {
  const target = journalActivityTarget(key, options.label);
  return createJournalActivityEvent({
    kind: "level-date-reset",
    itemKey: key,
    message: \`Updated level \${level} date for \${target.label} to today\`,
    context: target.context
  });
}

function logJournalPortfolioComplete(key, options = {}) {
  const target = journalActivityTarget(key, options.label);
  return createJournalActivityEvent({
    kind: "portfolio-complete",
    itemKey: key,
    message: \`Completed portfolio item: \${target.label}\`,
    context: target.context
  });
}

function getJournalLinkTargets() {
  const targets = [];
  [...roadmap.core, ...roadmap.specializations].forEach((chapter) => {
    chapter.sections.forEach((section) => {
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const sourceTab = chapter.kind === "specializations" ? "specializations" : "core";
        targets.push({
          key: lineKey(chapter, section, line),
          sourceTab,
          chapter,
          section,
          itemText: line.text.replace(/^\\s*(?:[-*]|\\d+\\.)\\s+/, "")
        });
      });
    });
  });

  getCustomItems().forEach((item) => targets.push(item));
  getPortfolioItems().forEach((item) => targets.push(item));
  return targets;
}

function getJournalTarget(key) {
  return getJournalLinkTargets().find((target) => target.key === key) || null;
}

function getActiveJournalLinkFilter() {
  return typeof state.journalLinkFilter === "string" ? state.journalLinkFilter : "";
}

function getActiveJournalTypeFilter() {
  return ["all", "notes", "activity"].includes(state.journalTypeFilter) ? state.journalTypeFilter : "all";
}

function setJournalTypeFilter(value) {
  state.journalTypeFilter = ["all", "notes", "activity"].includes(value) ? value : "all";
  render();
}

function getActiveJournalTagFilter() {
  return typeof state.journalTagFilter === "string" ? state.journalTagFilter.trim() : "";
}

function journalEntryHasTag(entry, tag) {
  const normalized = normalizeJournalTagKey(tag);
  return Boolean(normalized) && (entry.tags || []).some((item) => normalizeJournalTagKey(item) === normalized);
}

function normalizeJournalTagKey(tag) {
  return String(tag || "").trim().toLowerCase();
}

function getJournalLinkCount(key) {
  if (!key) return 0;
  return state.journal
    .map(normalizeJournalEntry)
    .filter(Boolean)
    .filter((entry) => entry.linkedItemKeys.includes(key))
    .length;
}

function openJournalLinkFilter(key) {
  if (!key) return;
  state.view = "journal";
  state.journalLinkFilter = key;
  state.query = "";
  if (dom.search) dom.search.value = "";
  render();
}

function clearJournalLinkFilter() {
  state.journalLinkFilter = "";
  render();
}

function openJournalTagFilter(tag) {
  const normalized = String(tag || "").trim();
  if (!normalized) return;
  state.view = "journal";
  state.journalTagFilter = normalized;
  state.query = "";
  if (dom.search) dom.search.value = "";
  render();
}

function clearJournalTagFilter() {
  state.journalTagFilter = "";
  render();
}

function journalTargetSearchText(key) {
  const target = getJournalTarget(key);
  if (!target) return key;
  return \`\${journalTargetContext(target)} \${target.itemText}\`;
}

function journalTargetContext(target) {
  if (target.sourceTab === "portfolio") return \`Portfolio / \${target.section.title}\`;
  if (target.sourceTab === "custom") return \`Custom / \${target.section.title}\`;
  if (target.sourceTab === "specializations") {
    const track = getSpecializationTrackForChapter(target.chapter);
    return \`Specializations / \${specializationTrackHeading(track)} / \${displayChapterTitle(target.chapter)} / \${target.section.title}\`;
  }
  return \`Core / \${displayChapterTitle(target.chapter)} / \${target.section.title}\`;
}

function openJournalTarget(key) {
  const target = getJournalTarget(key);
  if (!target) return;
  openSourceChapter(target);
}

function groupJournalEntries(entries) {
  const groups = new Map();
  entries.forEach((entry) => {
    const month = entry.date.slice(0, 7);
    if (!groups.has(month)) groups.set(month, []);
    groups.get(month).push(entry);
  });
  return Array.from(groups, ([month, items]) => ({ month, title: formatJournalMonth(month), items }));
}

function groupJournalTimelineItems(items) {
  const groups = new Map();
  items.forEach((item) => {
    const month = item.date.slice(0, 7);
    if (!groups.has(month)) groups.set(month, []);
    groups.get(month).push(item);
  });
  return Array.from(groups, ([month, groupItems]) => ({ month, title: formatJournalMonth(month), items: groupItems }));
}

function formatJournalMonth(month) {
  const match = String(month).match(/^(\\d{4})-(\\d{2})$/);
  if (!match) return month;
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return \`\${names[Number(match[2]) - 1]} \${match[1]}\`;
}
`,g=`const ROADMAP_BACKUP_SCHEMA = "sec-roadmap.user-state";
const ROADMAP_BACKUP_VERSION = 1;

async function exportRoadmapBackup() {
  if (typeof saveJournalInlineEditors === "function") saveJournalInlineEditors();

  const snapshot = normalizeState(state);
  await savePersistedState(snapshot);
  const payload = {
    schema: ROADMAP_BACKUP_SCHEMA,
    version: ROADMAP_BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    app: {
      name: "sec-roadmap",
      storageVersion: ROADMAP_DB_VERSION
    },
    state: snapshot
  };

  downloadJsonFile(payload, \`sec-roadmap-backup-\${todayDate()}.json\`);
}

async function importRoadmapBackupFile(file) {
  if (!file) return false;

  let backup;
  try {
    backup = parseRoadmapBackupPayload(await file.text());
  } catch (error) {
    window.alert(\`Could not import backup: \${error.message}\`);
    return false;
  }

  const summary = roadmapBackupSummary(backup.state);
  const confirmed = window.confirm(
    \`Import this backup and replace current local data?\\n\\n\${summary}\\n\\nThis cannot be undone unless you export the current data first.\`
  );
  if (!confirmed) return false;

  if (typeof saveJournalInlineEditors === "function") saveJournalInlineEditors();
  if (typeof destroyAllJournalEditors === "function") destroyAllJournalEditors();
  state = backup.state;
  await savePersistedState(state);
  initializeControls();
  render();
  window.alert("Backup imported.");
  return true;
}

function parseRoadmapBackupPayload(text) {
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error("the selected file is not valid JSON.");
  }

  const candidate = extractRoadmapBackupState(payload);
  if (!isRoadmapStateCandidate(candidate)) {
    throw new Error("the selected file does not look like a Security Roadmap backup.");
  }

  return {
    payload,
    state: normalizeState(candidate)
  };
}

function extractRoadmapBackupState(payload) {
  if (!payload || typeof payload !== "object") return null;
  if (payload.schema === ROADMAP_BACKUP_SCHEMA) return payload.state || null;
  if (payload.schema) return null;
  return payload;
}

function isRoadmapStateCandidate(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  return [
    "checked",
    "favorites",
    "dates",
    "reviewComplete",
    "portfolio",
    "custom",
    "journal",
    "tab",
    "query",
    "level",
    "journalTypeFilter",
    "journalExportRange",
    "selected",
    "view"
  ].some((key) => Object.prototype.hasOwnProperty.call(value, key));
}

function downloadJsonFile(value, filename) {
  const blob = new Blob([\`\${JSON.stringify(value, null, 2)}\\n\`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function roadmapBackupSummary(snapshot) {
  const parts = [
    \`\${Object.keys(snapshot.checked || {}).length} progress items\`,
    \`\${Object.keys(snapshot.favorites || {}).length} plan items\`,
    \`\${Array.isArray(snapshot.custom) ? snapshot.custom.length : 0} custom topics\`,
    \`\${Array.isArray(snapshot.journal) ? snapshot.journal.length : 0} journal entries\`,
    \`\${Array.isArray(snapshot.activity) ? snapshot.activity.length : 0} activity events\`,
    \`\${Object.keys(snapshot.portfolio || {}).length} portfolio items\`
  ];
  return parts.join("\\n");
}
`,y=`const JOURNAL_RUNTIME_SCRIPT_SRC = "./js/journal-runtime.js";
const JOURNAL_RUNTIME_MODULE_SRC = "./js/journal-runtime-entry.js";
const pendingLazyJournalEditors = new Set();
let journalRuntimeLoadPromise = null;

function loadJournalRuntime() {
  if (window.journalRuntimeLoaded && window.__journalRuntime) return Promise.resolve(window.__journalRuntime);
  if (journalRuntimeLoadPromise) return journalRuntimeLoadPromise;

  journalRuntimeLoadPromise = new Promise((resolve, reject) => {
    const finish = () => {
      if (window.__journalRuntime) {
        resolve(window.__journalRuntime);
      } else {
        reject(new Error("The journal editor runtime did not initialize."));
      }
    };

    const script = document.createElement("script");
    script.src = JOURNAL_RUNTIME_SCRIPT_SRC;
    script.onload = finish;
    script.onerror = () => {
      script.remove();
      if (window.location.protocol === "file:") {
        reject(new Error("Could not load the journal editor runtime."));
        return;
      }

      import(JOURNAL_RUNTIME_MODULE_SRC).then(finish).catch(() => {
        reject(new Error("Could not load the journal editor runtime."));
      });
    };
    document.head.append(script);
  });

  return journalRuntimeLoadPromise;
}

function journalRuntimeFunction(name) {
  return window.__journalRuntime?.[name] || null;
}

function mountJournalEditor(options) {
  const handle = createLazyJournalEditorHandle(options);
  pendingLazyJournalEditors.add(handle);
  options.element.replaceChildren(element("div", "journal-editor-loading", "Loading editor..."));

  loadJournalRuntime()
    .then((runtime) => {
      if (handle.destroyed) return;
      options.element.replaceChildren();
      handle.editor = runtime.mountJournalEditor(options);
      pendingLazyJournalEditors.delete(handle);
      Promise.resolve(handle.editor.ready).then(handle.resolveReady).catch(handle.rejectReady);
    })
    .catch((error) => {
      if (handle.destroyed) return;
      pendingLazyJournalEditors.delete(handle);
      options.element.replaceChildren(element("div", "journal-editor-loading error", error.message));
      handle.rejectReady(error);
    });

  return handle;
}

function createLazyJournalEditorHandle(options) {
  const handle = {
    destroyed: false,
    editor: null,
    initialMarkdown: options.markdown || "",
    ready: null,
    resolveReady: null,
    rejectReady: null
  };

  handle.ready = new Promise((resolve, reject) => {
    handle.resolveReady = resolve;
    handle.rejectReady = reject;
  });

  return handle;
}

function destroyJournalEditor(editor) {
  if (!editor) return;
  editor.destroyed = true;
  pendingLazyJournalEditors.delete(editor);
  const destroy = journalRuntimeFunction("destroyJournalEditor");
  if (destroy && editor.editor) destroy(editor.editor);
}

function destroyAllJournalEditors() {
  pendingLazyJournalEditors.forEach((editor) => {
    editor.destroyed = true;
  });
  pendingLazyJournalEditors.clear();
  const destroyAll = journalRuntimeFunction("destroyAllJournalEditors");
  if (destroyAll) destroyAll();
}

function getJournalEditorMarkdown(editor) {
  const getMarkdown = journalRuntimeFunction("getJournalEditorMarkdown");
  if (getMarkdown && editor?.editor) return getMarkdown(editor.editor);
  return editor?.initialMarkdown || "";
}

function focusJournalEditor(editor) {
  const focus = journalRuntimeFunction("focusJournalEditor");
  if (focus && editor?.editor) {
    focus(editor.editor);
    return;
  }
  if (editor?.ready) {
    editor.ready.then(() => focusJournalEditor(editor)).catch(() => {});
  }
}

function resizeJournalEditor(editor) {
  const resize = journalRuntimeFunction("resizeJournalEditor");
  if (resize && editor?.editor) {
    resize(editor.editor);
    return;
  }
  if (editor?.ready) {
    editor.ready.then(() => resizeJournalEditor(editor)).catch(() => {});
  }
}

function renderJournalMarkdownBody(markdown) {
  const renderMarkdown = journalRuntimeFunction("renderJournalMarkdownBody");
  if (renderMarkdown) return renderMarkdown(markdown);

  const wrapper = element("div", "journal-body journal-body-edit");
  if (!String(markdown || "").trim()) {
    wrapper.append(element("p", "journal-body-paragraph journal-body-empty", "No notes."));
    return wrapper;
  }
  wrapper.append(element("p", "journal-body-paragraph", String(markdown)));
  return wrapper;
}
`,h=`const PRETTY_EXPORT_SCRIPT_SRC = "./js/pretty-export.js";
const prettyExportProxy = {};
let prettyExportLoadPromise = null;

function renderPdfExportButton(label, onClick) {
  const button = element("button", "pdf-export-btn", "PDF");
  button.type = "button";
  button.title = label;
  button.setAttribute("aria-label", label);
  button.addEventListener("click", () => {
    onClick();
  });
  return button;
}

function loadPrettyExportScript() {
  if (window.prettyExportLoaded) return Promise.resolve();
  if (prettyExportLoadPromise) return prettyExportLoadPromise;

  prettyExportLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = PRETTY_EXPORT_SCRIPT_SRC;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load the PDF exporter."));
    document.head.append(script);
  });

  return prettyExportLoadPromise;
}

prettyExportProxy.exportJournalPdf = function exportJournalPdfProxy() {
  openJournalPdfExportDialog();
};

function runJournalPdfExport(days) {
  loadPrettyExportScript()
    .then(() => {
      if (window.exportJournalPdf === prettyExportProxy.exportJournalPdf) {
        throw new Error("The PDF exporter did not initialize.");
      }
      window.exportJournalPdf(days);
    })
    .catch((error) => window.alert(error.message));
}

prettyExportProxy.exportPlanPdf = function exportPlanPdfProxy() {
  loadPrettyExportScript()
    .then(() => {
      if (window.exportPlanPdf === prettyExportProxy.exportPlanPdf) {
        throw new Error("The PDF exporter did not initialize.");
      }
      window.exportPlanPdf();
    })
    .catch((error) => window.alert(error.message));
};

window.exportJournalPdf = prettyExportProxy.exportJournalPdf;
window.exportPlanPdf = prettyExportProxy.exportPlanPdf;

function openJournalPdfExportDialog() {
  closeJournalPdfExportDialog();

  const overlay = element("div", "pdf-export-overlay");
  const form = element("form", "pdf-export-dialog");
  const title = element("h2", "", "Export journal");
  const hint = element("p", "", "Number of days to include.");
  const label = element("label", "pdf-export-label", "Days");
  const input = document.createElement("input");
  input.type = "number";
  input.min = "1";
  input.max = String(MAX_JOURNAL_EXPORT_DAYS);
  input.step = "1";
  input.value = String(DEFAULT_JOURNAL_EXPORT_DAYS);
  input.required = true;
  input.setAttribute("aria-label", "Number of days to include in the journal PDF");
  label.append(input);

  const actions = element("div", "pdf-export-actions");
  const cancel = element("button", "pdf-export-secondary", "Cancel");
  const submit = element("button", "pdf-export-primary", "Export PDF");
  cancel.type = "button";
  submit.type = "submit";
  cancel.addEventListener("click", closeJournalPdfExportDialog);
  actions.append(cancel, submit);

  form.append(title, hint, label, actions);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const days = normalizedJournalExportDays(input.value);
    if (!days) {
      input.focus();
      return;
    }
    closeJournalPdfExportDialog();
    runJournalPdfExport(days);
  });
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeJournalPdfExportDialog();
  });
  overlay.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    closeJournalPdfExportDialog();
  });

  overlay.append(form);
  document.body.append(overlay);
  setTimeout(() => {
    input.focus();
    input.select();
  }, 0);
}

function closeJournalPdfExportDialog() {
  document.querySelector(".pdf-export-overlay")?.remove();
}
`,f=`function selectChapter(id) {
  state.selected[state.tab] = id;
  if (state.tab === "specializations") {
    const chapter = roadmap.specializations.find((item) => item.id === id);
    const track = chapter ? getSpecializationTrackForChapter(chapter) : null;
    if (track) state.specializationTrack = track.id;
  }
  state.view = "chapter";
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function selectSpecializationTrack(id) {
  state.specializationTrack = id;
  const track = getSpecializationTrackById(getVisibleChapters(), id) || getSpecializationTrackById(roadmap.specializations, id);
  if (track?.chapters?.length) state.selected.specializations = track.chapters[0].id;
  state.view = "track";
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function openSourceChapter(favorite) {
  if (favorite.sourceTab === "portfolio") {
    state.view = "portfolio";
    render();
    document.getElementById(supportBlockAnchor("Portfolio", favorite.section))?.scrollIntoView({ block: "start" });
    return;
  }

  if (favorite.sourceTab === "custom") {
    state.tab = "custom";
    state.view = "overview";
    render();
    dom.main.scrollIntoView({ block: "start" });
    return;
  }

  state.tab = favorite.sourceTab;
  state.selected[favorite.sourceTab] = favorite.chapter.id;
  if (favorite.sourceTab === "specializations") {
    const track = getSpecializationTrackForChapter(favorite.chapter);
    if (track) state.specializationTrack = track.id;
  }
  state.view = "chapter";
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function openCustomArea(title) {
  state.tab = "custom";
  state.view = "overview";
  render();
  document.getElementById(customAreaAnchor(title))?.scrollIntoView({ block: "start" });
}
`,v=`function initializeControls() {
  dom.search.value = state.query;
  dom.levelFilter.value = state.level;
  dom.journalTypeFilter.value = getActiveJournalTypeFilter();
  updateTabButtons();
}

function bindEvents() {
  dom.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      state.view = "overview";
      render();
    });
  });

  dom.search.addEventListener("input", () => {
    state.query = dom.search.value;
    state.view = state.view === "chapter" || state.view === "track" ? "overview" : state.view;
    render();
  });

  dom.levelFilter.addEventListener("change", () => {
    state.level = dom.levelFilter.value;
    state.view = state.view === "chapter" || state.view === "track" ? "overview" : state.view;
    render();
  });

  dom.journalTypeFilter.addEventListener("change", () => {
    setJournalTypeFilter(dom.journalTypeFilter.value);
  });

  dom.guideBtn.addEventListener("click", () => {
    state.view = "guide";
    render();
  });

  dom.reviewBtn.addEventListener("click", () => {
    state.view = "review";
    render();
  });

  dom.journalBtn.addEventListener("click", () => {
    state.view = "journal";
    render();
  });

  dom.portfolioBtn.addEventListener("click", () => {
    state.view = "portfolio";
    render();
  });

  dom.referenceBtn.addEventListener("click", () => {
    state.view = "reference";
    render();
  });

  dom.sourcesBtn.addEventListener("click", () => {
    state.view = "sources";
    render();
  });

  dom.exportBackupBtn.addEventListener("click", () => {
    exportRoadmapBackup().catch((error) => {
      window.alert(\`Could not export backup: \${error.message}\`);
    });
  });

  dom.importBackupBtn.addEventListener("click", () => {
    dom.importBackupInput.click();
  });

  dom.importBackupInput.addEventListener("change", () => {
    const file = dom.importBackupInput.files?.[0];
    importRoadmapBackupFile(file).finally(() => {
      dom.importBackupInput.value = "";
    });
  });

  dom.resetBtn.addEventListener("click", () => {
    if (!window.confirm("Reset progress and plan items?")) return;
    state.checked = {};
    state.favorites = {};
    state.dates = {};
    state.reviewComplete = {};
    state.portfolio = {};
    render();
  });

  if (typeof document.addEventListener === "function") {
    document.addEventListener("keydown", handleGlobalKeydown);
  }

  if (typeof window.addEventListener === "function") {
    window.addEventListener("beforeunload", persistOpenJournalEditors);
  }
}

function persistOpenJournalEditors() {
  if (typeof saveJournalInlineEditors === "function") saveJournalInlineEditors();
  saveState();
}

function handleGlobalKeydown(event) {
  if (event.key !== "Enter") return;
  if (state.view !== "journal" || editingJournalId) return;
  if (isInteractiveKeyboardTarget(event.target)) return;

  event.preventDefault();
  openJournalCreate();
}

function isInteractiveKeyboardTarget(target) {
  if (!target) return false;
  const tag = String(target.tagName || "").toLowerCase();
  if (["button", "input", "select", "textarea"].includes(tag)) return true;
  if (target.isContentEditable) return true;
  if (typeof target.getAttribute === "function" && target.getAttribute("role") === "button") return true;
  return target.attributes?.role === "button";
}

function updateTabButtons() {
  const tabActive = !["review", "journal", "map", "guide", "portfolio", "reference", "sources"].includes(state.view);
  dom.tabButtons.forEach((button) => {
    button.classList.toggle("active", tabActive && button.dataset.tab === state.tab);
  });
  dom.levelFilter.disabled = state.view === "review" || state.view === "journal";
  dom.journalTypeFilter.value = getActiveJournalTypeFilter();
  dom.journalTypeFilterGroup.hidden = state.view !== "journal";
}

function updateViewButtons() {
  dom.guideBtn.classList.toggle("active", state.view === "guide" || state.view === "map");
  dom.reviewBtn.classList.toggle("active", state.view === "review");
  dom.journalBtn.classList.toggle("active", state.view === "journal");
  dom.portfolioBtn.classList.toggle("active", state.view === "portfolio");
  dom.referenceBtn.classList.toggle("active", state.view === "reference");
  dom.sourcesBtn.classList.toggle("active", state.view === "sources");
}
`,k=`function renderFavoriteButton(key, text) {
  const button = element("button", "favorite-btn");
  button.type = "button";
  button.append(renderPinIcon("pin-icon"));
  button.setAttribute(
    "aria-label",
    \`\${state.favorites[key] ? "Remove from" : "Add to"} plan: \${plainText(text)}\`
  );
  button.title = state.favorites[key] ? "Remove from plan" : "Add to plan";
  button.classList.toggle("active", Boolean(state.favorites[key]));
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (state.favorites[key]) {
      delete state.favorites[key];
    } else {
      state.favorites[key] = true;
    }
    render();
  });
  return button;
}

function renderLevelButton(level, options) {
  const button = element("button", "level-btn");
  button.type = "button";
  button.textContent = level ? String(level) : "";
  button.dataset.level = String(level);
  button.setAttribute("aria-label", \`\${options.label}. Current level \${level || "blank"}.\`);
  button.addEventListener("click", (event) => {
    options.onClick(event);
    render();
  });
  return button;
}

function renderLevelDates(key, text) {
  const level = getLevel(key);
  const dates = getLevelDates(key);
  const wrapper = element("div", "level-dates");
  const activeDate = level ? dates[level] : "";
  const chipText = level ? (activeDate ? formatDate(activeDate) : "No date") : "";
  const chip = element("button", \`date-chip\${activeDate ? "" : " empty"}\`, chipText);
  chip.type = "button";
  chip.disabled = level === 0;
  chip.title = level ? \`Edit level \${level} date\` : "";
  chip.setAttribute("aria-label", level ? \`Edit level \${level} date for \${plainText(text)}\` : "No active level date");
  chip.classList.toggle("today", activeDate === todayDate());
  chip.addEventListener("click", () => {
    if (!level) return;
    wrapper.replaceChildren(renderDateEditor(key, level, text));
  });
  wrapper.append(chip);

  const updateButton = element("button", "date-update", "↻");
  updateButton.type = "button";
  updateButton.disabled = level === 0;
  updateButton.title = level ? \`Update level \${level} date\` : "Choose a level before updating the date";
  updateButton.setAttribute(
    "aria-label",
    level
      ? \`Update level \${level} date for \${plainText(text)}\`
      : \`Choose a level before updating the date for \${plainText(text)}\`
  );
  updateButton.addEventListener("click", () => {
    if (!level) return;
    updateLevelDate(key, level, { log: true, label: plainText(text) });
    render();
  });

  wrapper.classList.toggle("empty", !level);
  wrapper.append(updateButton);
  return wrapper;
}

function renderJournalLinkIndicator(key, text) {
  const count = getJournalLinkCount(key);
  if (!count) {
    const spacer = element("span", "journal-link-indicator-spacer");
    spacer.setAttribute("aria-hidden", "true");
    return spacer;
  }

  const button = element("button", "journal-link-indicator", count > 9 ? "9+" : String(count));
  button.type = "button";
  const entryLabel = count === 1 ? "entry" : "entries";
  button.title = \`\${count} linked journal \${entryLabel}\`;
  button.setAttribute("aria-label", \`Show \${count} journal \${entryLabel} linked to \${plainText(text)}\`);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openJournalLinkFilter(key);
  });
  return button;
}

function renderDateEditor(key, level, text) {
  const editor = element("div", "date-editor");
  const input = document.createElement("input");
  input.type = "date";
  input.value = getLevelDates(key)[level] || todayDate();
  input.setAttribute("aria-label", \`Date for level \${level} \${plainText(text)}\`);

  const save = () => {
    setLevelDate(key, level, input.value);
    render();
  };

  input.addEventListener("change", save);
  input.addEventListener("blur", save);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      save();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      render();
    }
  });

  setTimeout(() => {
    input.focus();
    if (typeof input.showPicker === "function") input.showPicker();
  }, 0);

  editor.append(input);
  return editor;
}

function renderPinIcon(className) {
  const icon = element("span", className);
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = \`
    <svg viewBox="-1 -2 26 28" focusable="false">
      <g class="pin-shape" transform="rotate(35 12 12)">
        <path d="M6.5 3.5c0 4.2 2.1 4.2 2.1 7.4s-2.1 3.2-2.1 4.3h11c0-1.1-2.1-1.1-2.1-4.3s2.1-3.2 2.1-7.4z"/>
        <path d="M11.1 15.2h1.8L12 22z"/>
        <circle cx="12" cy="22" r="1.9"/>
      </g>
    </svg>
  \`;
  return icon;
}
`,b=`function renderNav(visible) {
  dom.nav.replaceChildren();

  const supportContext = getSupportViewContext();
  if (supportContext) {
    renderSupportNav(supportContext.support, supportContext.crumb);
    return;
  }

  if (state.view === "review") {
    renderReviewNav();
    return;
  }

  if (state.view === "journal") {
    renderJournalNav();
    return;
  }

  if (state.tab === "favorites") {
    renderFavoriteNav();
    return;
  }

  if (state.tab === "custom") {
    renderCustomNav();
    return;
  }

  if (state.tab === "specializations") {
    renderSpecializationNav(visible);
    return;
  }

  if (!visible.length) {
    const item = element("li");
    item.append(element("p", "empty", "No matching chapters."));
    dom.nav.append(item);
    return;
  }

  visible.forEach((chapter) => {
    const progress = getChapterProgress(chapter);
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.classList.toggle("active", state.view === "chapter" && chapter.id === state.selected[state.tab]);

    row.append(
      renderLevelButton(progress.level, {
        label: \`Set study level for \${displayChapterTitle(chapter)}\`,
        onClick: (event) => {
          event.stopPropagation();
          setKeysLevel(getChapterKeys(chapter), nextLevel(progress.level), { label: displayChapterTitle(chapter) });
        }
      }),
      element("span", "nav-title-text", displayChapterTitle(chapter)),
      element("span", "nav-prog", \`\${progress.percent}%\`)
    );

    row.addEventListener("click", () => selectChapter(chapter.id));
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectChapter(chapter.id);
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}

function renderSpecializationNav(visible) {
  const tracks = getSpecializationTracks(visible);
  if (!tracks.length) {
    const item = element("li");
    item.append(element("p", "empty", "No matching tracks."));
    dom.nav.append(item);
    return;
  }

  if (state.view === "overview") {
    tracks.forEach((track) => {
      const progress = getProgressForChapters(track.chapters);
      const row = element("div", "nav-link");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.classList.toggle("active", track.id === state.specializationTrack);
      row.append(
        element("span", "support-nav-dot", ""),
        element("span", "nav-title-text", specializationTrackHeading(track)),
        element("span", "nav-prog", \`\${progress.percent}%\`)
      );
      row.addEventListener("click", () => selectSpecializationTrack(track.id));
      row.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        selectSpecializationTrack(track.id);
      });

      const item = element("li");
      item.append(row);
      dom.nav.append(item);
    });
    return;
  }

  const activeTrack = getSpecializationTrackById(visible, state.specializationTrack) || tracks[0];
  activeTrack.chapters.forEach((chapter) => {
    const progress = getChapterProgress(chapter);
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.classList.toggle("active", state.view === "chapter" && chapter.id === state.selected.specializations);

    row.append(
      renderLevelButton(progress.level, {
        label: \`Set study level for \${displayChapterTitle(chapter)}\`,
        onClick: (event) => {
          event.stopPropagation();
          setKeysLevel(getChapterKeys(chapter), nextLevel(progress.level), { label: displayChapterTitle(chapter) });
        }
      }),
      element("span", "nav-title-text", specializationChapterLabel(chapter)),
      element("span", "nav-prog", \`\${progress.percent}%\`)
    );

    row.addEventListener("click", () => selectChapter(chapter.id));
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectChapter(chapter.id);
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}

function getSupportViewContext() {
  if (state.view === "guide" || state.view === "map") {
    return { support: roadmap.support.guide, crumb: "Guide" };
  }
  if (state.view === "portfolio") {
    return { support: roadmap.support.portfolio, crumb: "Portfolio" };
  }
  if (state.view === "reference") {
    return { support: roadmap.support.reference, crumb: "Reference" };
  }
  if (state.view === "sources") {
    return { support: roadmap.support.sources, crumb: "Sources" };
  }
  return null;
}

function renderSupportNav(support, crumb) {
  if (!support?.blocks?.length) {
    const item = element("li");
    item.append(element("p", "empty", "No sections loaded."));
    dom.nav.append(item);
    return;
  }

  support.blocks.forEach((block) => {
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.append(
      element("span", "support-nav-dot", ""),
      element("span", "nav-title-text", stripSectionNumber(block.title)),
      element("span", "nav-prog", supportNavCount(block))
    );
    row.addEventListener("click", () => {
      document.getElementById(supportBlockAnchor(crumb, block))?.scrollIntoView({ block: "start" });
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      document.getElementById(supportBlockAnchor(crumb, block))?.scrollIntoView({ block: "start" });
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}

function supportNavCount(block) {
  const bulletCount = block.lines.filter((line) => /^\\s*[-*]\\s+/.test(line.text)).length;
  return bulletCount ? String(bulletCount) : "";
}
`,S=`function renderHeader(title, description, crumb) {
  const header = element("header", "part-header");
  header.append(element("div", "crumb", crumb), element("h1", "", title));
  if (description) header.append(inlineHtml("p", description));
  return header;
}

function renderIntro(lines) {
  const useful = lines.filter((line) => line.text.trim());
  if (!useful.length) return null;

  const wrapper = element("div", "notes");
  renderBlocks(useful, null, null, wrapper, false);
  return wrapper;
}

function renderBlocks(lines, chapter, section, parent, trackItems) {
  let list = null;
  let listType = "";
  const levelFilter = selectedLevel();

  const flushList = () => {
    list = null;
    listType = "";
  };

  lines.forEach((line) => {
    const text = line.text;
    if (!text.trim()) {
      flushList();
      return;
    }

    const heading = text.match(/^(#{4,6})\\s+(.+)$/);
    if (heading) {
      flushList();
      parent.append(inlineHtml("h4", cleanInline(heading[2])));
      return;
    }

    const bullet = text.match(/^\\s*[-*]\\s+(.+)$/);
    const number = text.match(/^\\s*\\d+\\.\\s+(.+)$/);

    if (bullet || number) {
      const type = bullet ? "ul" : "ol";
      if (!list || listType !== type) {
        list = element(type, trackItems ? "items" : "");
        listType = type;
        parent.append(list);
      }

      const item = element("li", trackItems ? "item" : "");
      const itemText = bullet ? bullet[1] : number[1];

      if (trackItems && chapter && section) {
        const key = lineKey(chapter, section, line);
        if (levelFilter !== null && getLevel(key) !== levelFilter) return;
        const row = element("div", "item-row");
        const level = getLevel(key);
        item.dataset.level = String(level);
        item.classList.toggle("done", level === 3);
        row.append(
          renderLevelButton(level, {
            label: \`Set study level for \${plainText(itemText)}\`,
            onClick: () => cycleKeyLevel(key)
          }),
          renderFavoriteButton(key, itemText),
          inlineHtml("span", itemText),
          renderJournalLinkIndicator(key, itemText),
          renderLevelDates(key, itemText)
        );
        item.append(row);
      } else {
        item.append(inlineHtml("span", itemText));
      }

      list.append(item);
      return;
    }

    flushList();
    parent.append(inlineHtml("p", text));
  });
}
`,w=`function renderOverview(visible) {
  dom.main.replaceChildren();

  const header = renderHeader(tabTitle(), tabIntro(), "Roadmap");
  dom.main.append(header);

  if (!visible.length) {
    dom.main.append(element("p", "empty", "No content matches the current filter."));
    return;
  }

  const grid = element("div", "overview-grid");
  visible.forEach((chapter) => {
    const progress = getChapterProgress(chapter);
    const card = element("button", "overview-card");
    card.type = "button";
    card.classList.toggle("active", chapter.id === state.selected[state.tab]);

    card.append(
      element("div", "t", displayChapterTitle(chapter)),
      element("div", "s", \`\${progress.done} of \${progress.total} progress points\`),
      inlineHtml("p", excerptFor(chapter))
    );

    const bar = element("div", "bar");
    const fill = document.createElement("span");
    fill.style.width = \`\${progress.percent}%\`;
    bar.append(fill);
    card.append(bar);

    card.addEventListener("click", () => selectChapter(chapter.id));
    grid.append(card);
  });

  dom.main.append(grid);
}

function renderSpecializationOverview(visible) {
  dom.main.replaceChildren();

  const tracks = getSpecializationTracks(visible);
  const header = renderHeader("Specializations", tabIntro(), "Roadmap");
  dom.main.append(header);

  if (!tracks.length) {
    dom.main.append(element("p", "empty", "No specialization tracks match the current filter."));
    return;
  }

  const grid = element("div", "overview-grid track-grid");
  tracks.forEach((track) => {
    const progress = getProgressForChapters(track.chapters);
    const card = element("button", "overview-card track-card");
    card.type = "button";
    card.classList.toggle("active", track.id === state.specializationTrack);

    card.append(
      element("div", "t", specializationTrackHeading(track)),
      element("div", "s", \`\${track.chapters.length} chapters / \${progress.done} of \${progress.total} progress points\`),
      inlineHtml("p", specializationTrackExcerpt(track))
    );

    const bar = element("div", "bar");
    const fill = document.createElement("span");
    fill.style.width = \`\${progress.percent}%\`;
    bar.append(fill);
    card.append(bar);

    card.addEventListener("click", () => selectSpecializationTrack(track.id));
    grid.append(card);
  });

  dom.main.append(grid);
}

function renderSpecializationTrack(visible) {
  const track = getSpecializationTrackById(visible, state.specializationTrack) || getSpecializationTracks(visible)[0];
  dom.main.replaceChildren();

  if (!track) {
    dom.main.append(element("p", "empty", "No specialization tracks match the current filter."));
    return;
  }

  const progress = getProgressForChapters(track.chapters);
  const header = renderHeader(specializationTrackHeading(track), specializationTrackExcerpt(track), "Specializations");
  const backButton = element("button", "back-btn", "Back to Specializations");
  backButton.type = "button";
  backButton.addEventListener("click", () => {
    state.view = "overview";
    render();
  });
  header.prepend(backButton);

  const meta = element("div", "meta");
  const stat = element("span", "stat", \`\${track.chapters.length} chapters / \${progress.done} of \${progress.total} points\`);
  const bar = element("div", "bar");
  const fill = document.createElement("span");
  fill.style.width = \`\${progress.percent}%\`;
  bar.append(fill);
  meta.append(stat, bar);
  header.append(meta);
  dom.main.append(header);

  const grid = element("div", "overview-grid chapter-grid");
  track.chapters.forEach((chapter) => {
    const chapterProgress = getChapterProgress(chapter);
    const card = element("button", "overview-card");
    card.type = "button";
    card.classList.toggle("active", chapter.id === state.selected.specializations);

    card.append(
      element("div", "t", specializationChapterLabel(chapter)),
      element("div", "s", \`\${chapterProgress.done} of \${chapterProgress.total} progress points\`),
      inlineHtml("p", excerptFor(chapter))
    );

    const chapterBar = element("div", "bar");
    const chapterFill = document.createElement("span");
    chapterFill.style.width = \`\${chapterProgress.percent}%\`;
    chapterBar.append(chapterFill);
    card.append(chapterBar);

    card.addEventListener("click", () => selectChapter(chapter.id));
    grid.append(card);
  });

  dom.main.append(grid);
}
`,C=`function renderChapter(visible) {
  const chapter = visible.find((item) => item.id === state.selected[state.tab]) || visible[0];
  dom.main.replaceChildren();

  if (!chapter) {
    dom.main.append(element("p", "empty", "No content matches the current filter."));
    return;
  }

  const progress = getChapterProgress(chapter);
  const header = renderHeader(displayChapterTitle(chapter), "", tabTitle());
  const backLabel = state.tab === "specializations" ? "Back to Specialization" : \`Back to \${tabTitle()}\`;
  const backButton = element("button", "back-btn", backLabel);
  backButton.type = "button";
  backButton.addEventListener("click", () => {
    state.view = state.tab === "specializations" ? "track" : "overview";
    render();
  });
  header.prepend(backButton);

  const meta = element("div", "meta");
  const chapterToggle = element("div", "chapter-toggle");
  chapterToggle.append(
    renderLevelButton(progress.level, {
      label: \`Set study level for \${displayChapterTitle(chapter)}\`,
      onClick: () => setKeysLevel(getChapterKeys(chapter), nextLevel(progress.level), { label: displayChapterTitle(chapter) })
    }),
    element("span", "", "Chapter level")
  );

  const stat = element("span", "stat", \`\${progress.done} of \${progress.total} points\`);
  const bar = element("div", "bar");
  const fill = document.createElement("span");
  fill.style.width = \`\${progress.percent}%\`;
  bar.append(fill);
  meta.append(chapterToggle, stat, bar);
  header.append(meta);

  dom.main.append(header);

  const intro = renderIntro(chapter.intro);
  if (intro) dom.main.append(intro);

  chapter.sections.forEach((section) => {
    dom.main.append(renderStudySection(chapter, section));
  });
}

function renderStudySection(chapter, section) {
  const progress = getSectionProgress(chapter, section);
  const wrapper = element("section", "section");
  const heading = element("h3");
  const label = element("div", "section-heading");
  const visibleKeys = getVisibleSectionKeys(chapter, section);
  label.append(
    renderLevelButton(progress.level, {
      label: \`Set study level for \${section.title}\`,
      onClick: () => setKeysLevel(visibleKeys, nextLevel(progress.level), { label: section.title })
    }),
    element("span", "", section.title)
  );
  heading.append(label, element("span", "sec-prog", \`\${progress.done}/\${progress.total}\`));
  wrapper.append(heading);
  renderBlocks(section.lines, chapter, section, wrapper, true);
  return wrapper;
}
`,I=`function renderPortfolioBlocks(block, parent) {
  let list = null;

  const flushList = () => {
    list = null;
  };

  block.lines.forEach((line) => {
    const text = line.text;
    if (!text.trim()) {
      flushList();
      return;
    }

    const heading = text.match(/^(#{4,6})\\s+(.+)$/);
    if (heading) {
      flushList();
      parent.append(inlineHtml("h4", cleanInline(heading[2])));
      return;
    }

    const bullet = text.match(/^\\s*[-*]\\s+(.+)$/);
    if (bullet) {
      if (!list) {
        list = element("ul", "portfolio-items");
        parent.append(list);
      }
      list.append(renderPortfolioItem(block, line, bullet[1]));
      return;
    }

    flushList();
    parent.append(inlineHtml("p", text));
  });
}

function renderPortfolioItem(block, line, text) {
  const key = portfolioKey(block, line);
  const itemText = cleanPortfolioText(text);
  const references = getPortfolioReferences(text);
  const item = element("li", "portfolio-item");
  const row = element("div", "portfolio-row");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = portfolioInputId(key);
  checkbox.checked = Boolean(state.portfolio?.[key]);
  checkbox.setAttribute("aria-label", \`Mark portfolio item complete: \${plainText(itemText)}\`);
  checkbox.addEventListener("change", () => {
    setPortfolioComplete(key, checkbox.checked, references, { label: plainText(itemText) });
    render();
  });
  const label = element("label", "portfolio-text");
  label.setAttribute("for", checkbox.id);
  label.append(inlineHtml("span", itemText));
  row.append(checkbox, renderFavoriteButton(key, itemText), label);
  row.append(renderJournalLinkIndicator(key, itemText));
  item.classList.toggle("done", checkbox.checked);
  item.append(row);
  return item;
}

function renderFavorites() {
  dom.main.replaceChildren();

  const favorites = getFavoriteItems();
  const header = renderHeader("Plan", "Pin roadmap, custom, or portfolio items to build your current study plan.", "Study");
  const toolbar = element("div", "plan-toolbar");
  toolbar.append(renderPdfExportButton("Export plan as PDF", exportPlanPdf));
  header.append(toolbar);
  dom.main.append(header);

  if (!favorites.length) {
    const message = state.query.trim()
      ? "No plan items match the current search."
      : "No plan items yet.";
    dom.main.append(element("p", "empty", message));
    return;
  }

  const list = element("div", "favorites-list");
  favorites.forEach((favorite) => {
    const card = element("article", "favorite-card");
    const context = element(
      "div",
      "favorite-context",
      favoriteContext(favorite)
    );

    const row = favorite.sourceTab === "portfolio"
      ? renderPortfolioPlanRow(favorite)
      : renderStudyPlanRow(favorite);

    const actions = element("div", "favorite-actions");
    const openButton = element(
      "button",
      "ghost-btn compact",
      favorite.sourceTab === "portfolio" ? "Open portfolio" : "Open chapter"
    );
    openButton.type = "button";
    openButton.addEventListener("click", () => openSourceChapter(favorite));
    actions.append(openButton);

    const done = favorite.sourceTab === "portfolio"
      ? Boolean(state.portfolio?.[favorite.key])
      : getLevel(favorite.key) === 3;
    card.dataset.level = String(favorite.sourceTab === "portfolio" ? 0 : getLevel(favorite.key));
    card.classList.toggle("done", done);
    card.append(context, row, actions);
    list.append(card);
  });

  dom.main.append(list);
}

function renderStudyPlanRow(favorite) {
  const row = element("div", "favorite-row");
  const level = getLevel(favorite.key);
  row.append(
    renderLevelButton(level, {
      label: \`Set study level for \${plainText(favorite.itemText)}\`,
      onClick: () => cycleKeyLevel(favorite.key)
    }),
    renderFavoriteButton(favorite.key, favorite.itemText),
    inlineHtml("div", favorite.itemText),
    renderJournalLinkIndicator(favorite.key, favorite.itemText),
    renderLevelDates(favorite.key, favorite.itemText)
  );
  return row;
}

function renderPortfolioPlanRow(favorite) {
  const row = element("div", "favorite-row portfolio-plan-row");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = Boolean(state.portfolio?.[favorite.key]);
  checkbox.setAttribute("aria-label", \`Mark portfolio item complete: \${plainText(favorite.itemText)}\`);
  checkbox.addEventListener("change", () => {
    setPortfolioComplete(favorite.key, checkbox.checked, favorite.references, { label: plainText(favorite.itemText) });
    render();
  });
  const text = inlineHtml("div", favorite.itemText);
  text.classList.add("plan-text");
  row.append(
    checkbox,
    renderFavoriteButton(favorite.key, favorite.itemText),
    text,
    renderJournalLinkIndicator(favorite.key, favorite.itemText)
  );
  return row;
}

function renderFavoriteNav() {
  const favorites = getFavoriteItems();

  if (!favorites.length) {
    const item = element("li");
    item.append(element("p", "empty", state.query.trim() ? "No matching plan items." : "No plan items yet."));
    dom.nav.append(item);
    return;
  }

  const groups = new Map();
  favorites.forEach((favorite) => {
    const key = \`\${favorite.sourceTab}:\${favorite.chapter.id}\`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(favorite);
  });

  groups.forEach((items) => {
    const first = items[0];
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    const chapterTitle = displayChapterTitle(first.chapter);
    row.append(
      renderPinIcon("favorite-nav-pin pin-icon"),
      element("span", "nav-title-text", chapterTitle),
      element("span", "nav-prog", \`\${items.length}\`)
    );
    row.addEventListener("click", () => openSourceChapter(first));
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openSourceChapter(first);
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}
`,A=`function renderSupportView(support, crumb, title = support?.title) {
  dom.main.replaceChildren();
  if (!support) {
    dom.main.append(element("p", "empty", "No content loaded."));
    return;
  }

  dom.main.append(renderHeader(title, support.description, crumb));

  const intro = renderIntro(support.intro);
  if (intro) dom.main.append(intro);

  support.blocks.forEach((block) => {
    const section = element("section", "support-block");
    section.id = supportBlockAnchor(crumb, block);
    section.append(element("h3", "", block.title));
    if (crumb === "Portfolio") {
      renderPortfolioBlocks(block, section);
    } else {
      renderBlocks(block.lines, null, null, section, false);
    }
    dom.main.append(section);
  });
}
`,T=`function renderCustom() {
  dom.main.replaceChildren();

  const items = getVisibleCustomItems();
  const header = renderHeader("Custom", "Add your own topics and track them with the same levels, dates, plan, and review flow.", "Roadmap");
  dom.main.append(header, renderCustomForm());

  if (!state.custom.length) {
    dom.main.append(element("p", "empty", "No custom topics yet."));
    return;
  }

  if (!items.length) {
    dom.main.append(element("p", "empty", "No custom topics match the current filters."));
    return;
  }

  const groups = groupCustomItems(items);
  const wrapper = element("div", "custom-groups");
  groups.forEach((group) => {
    const section = element("section", "custom-group");
    section.id = customAreaAnchor(group.title);
    const heading = element("div", "custom-group-heading");
    heading.append(element("h3", "", group.title), element("span", "review-count", \`\${group.items.length}\`));
    section.append(heading);

    const list = element("div", "custom-list");
    group.items.forEach((item) => {
      list.append(renderCustomItem(item));
    });
    section.append(list);
    wrapper.append(section);
  });
  dom.main.append(wrapper);
}

function renderCustomForm() {
  const form = element("form", "custom-form");
  const topic = document.createElement("input");
  topic.type = "text";
  topic.name = "topic";
  topic.placeholder = "Topic";
  topic.autocomplete = "off";
  topic.required = true;

  const area = document.createElement("input");
  area.type = "text";
  area.name = "area";
  area.placeholder = "Area / group";
  area.autocomplete = "off";

  const addButton = element("button", "custom-add", "+");
  addButton.type = "submit";
  addButton.setAttribute("aria-label", "Add custom topic");

  form.append(topic, area, addButton);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomTopic(topic.value, area.value);
    render();
  });
  return form;
}

function renderCustomItem(item) {
  const card = element("article", "custom-card");
  const row = element("div", "custom-row");
  const content = element("div", "custom-content");
  const context = element("div", "custom-context", item.section.title);

  content.append(inlineHtml("div", item.itemText), context);
  row.append(
    renderLevelButton(item.level, {
      label: \`Set study level for \${plainText(item.itemText)}\`,
      onClick: () => cycleKeyLevel(item.key)
    }),
    renderFavoriteButton(item.key, item.itemText),
    content,
    renderJournalLinkIndicator(item.key, item.itemText),
    renderLevelDates(item.key, item.itemText),
    renderCustomActions(item)
  );

  card.dataset.level = String(item.level);
  card.classList.toggle("done", item.level === 3);
  card.append(row);
  return card;
}

function renderCustomActions(item) {
  const actions = element("div", "custom-actions");
  const edit = element("button", "icon-btn", "✎");
  edit.type = "button";
  edit.title = "Edit topic";
  edit.setAttribute("aria-label", \`Edit \${plainText(item.itemText)}\`);
  edit.addEventListener("click", () => editCustomTopic(item.topic));

  const remove = element("button", "icon-btn danger", "×");
  remove.type = "button";
  remove.title = "Delete topic";
  remove.setAttribute("aria-label", \`Delete \${plainText(item.itemText)}\`);
  remove.addEventListener("click", () => deleteCustomTopic(item.topic.id));

  actions.append(edit, remove);
  return actions;
}

function renderCustomNav() {
  const items = getVisibleCustomItems();
  if (!items.length) {
    const item = element("li");
    item.append(element("p", "empty", state.custom.length ? "No matching custom topics." : "No custom topics yet."));
    dom.nav.append(item);
    return;
  }

  groupCustomItems(items).forEach((group) => {
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.append(
      element("span", "custom-nav-dot", ""),
      element("span", "nav-title-text", group.title),
      element("span", "nav-prog", \`\${group.items.length}\`)
    );
    row.addEventListener("click", () => openCustomArea(group.title));
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openCustomArea(group.title);
    });
    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}
`,E=`function renderReview() {
  dom.main.replaceChildren();

  const buckets = getReviewBuckets();
  const itemCount = buckets.reduce((sum, bucket) => sum + bucket.items.length, 0);
  const header = renderHeader(
    "Review",
    "Non-blank items sorted by the date of their current level, oldest first.",
    "Roadmap"
  );
  header.append(element("p", "path-note", \`\${itemCount} items ready for review.\`));
  dom.main.append(header);

  if (!itemCount) {
    dom.main.append(element("p", "empty", state.query.trim() ? "No review items match the current search." : "No review items yet."));
    return;
  }

  const wrapper = element("div", "review-buckets");
  buckets.forEach((bucket) => {
    if (!bucket.items.length) return;
    const section = element("section", "review-bucket");
    section.id = \`review-\${bucket.id}\`;
    const heading = element("div", "review-bucket-heading");
    heading.append(element("h3", "", bucket.title), element("span", "review-count", \`\${bucket.items.length}\`));
    section.append(heading);

    const list = element("div", "review-list");
    bucket.items.forEach((item) => {
      list.append(renderReviewItem(item));
    });
    section.append(list);
    wrapper.append(section);
  });

  dom.main.append(wrapper);
}

function renderReviewItem(item) {
  const card = element("article", "review-card");
  const row = element("div", "review-row");
  const content = element("div", "review-content");
  const context = element("div", "review-context");
  const openButton = element("button", "review-open", "↗");
  openButton.type = "button";
  openButton.title = "Open chapter";
  openButton.setAttribute("aria-label", \`Open \${displayChapterTitle(item.chapter)}\`);
  openButton.addEventListener("click", () => openSourceChapter(item));

  const itemContext = item.sourceTab === "specializations"
    ? \`\${sourceLabel(item.sourceTab)} / \${specializationTrackHeading(getSpecializationTrackForChapter(item.chapter))} / \${displayChapterTitle(item.chapter)} / \${item.section.title}\`
    : \`\${sourceLabel(item.sourceTab)} / \${displayChapterTitle(item.chapter)} / \${item.section.title}\`;
  context.append(
    element("span", "", itemContext),
    openButton
  );
  content.append(inlineHtml("div", item.itemText), context);

  row.append(
    renderReviewCompleteControl(item),
    renderLevelButton(item.level, {
      label: \`Set study level for \${plainText(item.itemText)}\`,
      onClick: () => cycleKeyLevel(item.key)
    }),
    renderFavoriteButton(item.key, item.itemText),
    content,
    renderJournalLinkIndicator(item.key, item.itemText),
    renderLevelDates(item.key, item.itemText)
  );

  card.dataset.level = String(item.level);
  card.classList.toggle("review-complete", isReviewComplete(item.key));
  card.append(row);
  return card;
}

function renderReviewCompleteControl(item) {
  const label = element("label", "review-complete-control");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isReviewComplete(item.key);
  checkbox.setAttribute("aria-label", \`Mark review complete for \${plainText(item.itemText)}\`);
  checkbox.addEventListener("change", () => {
    setReviewComplete(item.key, checkbox.checked);
    render();
    if (checkbox.checked) {
      document.getElementById("review-complete")?.scrollIntoView({ block: "start" });
    }
  });
  label.append(checkbox);
  return label;
}

function renderReviewNav() {
  const buckets = getReviewBuckets().filter((bucket) => bucket.items.length);

  if (!buckets.length) {
    const item = element("li");
    item.append(element("p", "empty", state.query.trim() ? "No matching review items." : "No review items yet."));
    dom.nav.append(item);
    return;
  }

  buckets.forEach((bucket) => {
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.append(
      element("span", "review-nav-dot", ""),
      element("span", "nav-title-text", bucket.title),
      element("span", "nav-prog", \`\${bucket.items.length}\`)
    );
    row.addEventListener("click", () => {
      document.getElementById(\`review-\${bucket.id}\`)?.scrollIntoView({ block: "start" });
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      document.getElementById(\`review-\${bucket.id}\`)?.scrollIntoView({ block: "start" });
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}
`,P=`const JOURNAL_COMMANDS = [
  { id: "title", aliases: ["t"], label: "/title", detail: "Set note title" },
  { id: "subtitle", aliases: ["st", "substitle"], label: "/subtitle", detail: "Set note subtitle" },
  { id: "clear-subtitle", label: "/clear-subtitle", detail: "Clear note subtitle" },
  { id: "clear-links", label: "/clear-links", detail: "Remove all linked items" },
  { id: "clear-tags", label: "/clear-tags", detail: "Remove all tags" },
  { id: "tag", label: "/tag", detail: "Add the next word as a tag" },
  { id: "link", label: "/link", detail: "Link a roadmap item" },
  { id: "plan", label: "/plan", detail: "Link an item from your current plan" }
];

function createJournalEditorControls(entry, title, subtitle) {
  return {
    title,
    subtitle,
    subtitleSource: journalInitialSubtitleSource(entry),
    tags: uniqueJournalTags(entry?.tags || []),
    linkedItemKeys: uniqueJournalLinks(entry?.linkedItemKeys || []),
    links: null,
    meta: null
  };
}

function renderJournalEditorMeta(controls) {
  const wrapper = element("div", "journal-editor-meta");
  controls.meta = wrapper;
  refreshJournalEditorMeta(controls);
  return wrapper;
}

function refreshJournalEditorMeta(controls) {
  if (!controls.meta) return;

  const subtitle = journalEditorSubtitleText(controls);
  controls.meta.replaceChildren();
  if (subtitle) controls.meta.append(renderJournalEditorSubtitle(controls, subtitle));
  controls.tags.forEach((tag) => controls.meta.append(renderJournalEditorTag(controls, tag)));
  controls.linkedItemKeys.forEach((key) => {
    const target = getJournalTarget(key);
    const label = target ? plainText(target.itemText) : key;
    const context = target ? journalTargetContext(target) : "Linked item";
    controls.meta.append(renderJournalEditorLink(controls, key, label, context));
  });
  controls.meta.hidden = !subtitle && !controls.tags.length && !controls.linkedItemKeys.length;
  refreshJournalEditorLinks(controls);
  refreshJournalEntryHeader(controls);
  if (typeof controls.onMetadataChange === "function") controls.onMetadataChange();
}

function renderJournalEditorSubtitle(controls, subtitle) {
  const chip = element("button", "journal-editor-chip subtitle", \`Subtitle: \${trimText(subtitle, 54)}\`);
  chip.type = "button";
  chip.title = "Clear subtitle";
  chip.setAttribute("aria-label", "Clear subtitle");
  chip.addEventListener("click", () => {
    clearJournalSubtitle(controls);
    refreshJournalEditorMeta(controls);
  });
  return chip;
}

function renderJournalEditorTag(controls, tag) {
  const chip = element("button", "journal-editor-chip", tag);
  chip.type = "button";
  chip.title = \`Remove tag \${tag}\`;
  chip.setAttribute("aria-label", \`Remove tag \${tag}\`);
  chip.addEventListener("click", () => {
    controls.tags = controls.tags.filter((item) => item.toLowerCase() !== tag.toLowerCase());
    refreshJournalEditorMeta(controls);
  });
  return chip;
}

function renderJournalEditorLink(controls, key, label, context) {
  const chip = element("button", "journal-editor-chip link", trimText(label, 54));
  chip.type = "button";
  chip.title = \`Remove link: \${context} / \${label}\`;
  chip.setAttribute("aria-label", \`Remove link to \${label}\`);
  chip.addEventListener("click", () => {
    controls.linkedItemKeys = controls.linkedItemKeys.filter((item) => item !== key);
    refreshJournalEditorMeta(controls);
  });
  return chip;
}

function renderJournalEditorLinks(controls) {
  const wrapper = element("div", "journal-links");
  controls.links = wrapper;
  refreshJournalEditorLinks(controls);
  return wrapper;
}

function refreshJournalEditorLinks(controls) {
  if (!controls.links) return;

  const targets = controls.linkedItemKeys
    .map((key) => getJournalTarget(key))
    .filter(Boolean);
  controls.links.replaceChildren();
  targets.forEach((target) => controls.links.append(renderJournalEditorOpenLink(target)));
  controls.links.hidden = !targets.length;
}

function refreshJournalEntryHeader(controls) {
  if (controls.headerTitle) {
    controls.headerTitle.textContent = controls.title.value.trim() || "Notes";
  }

  if (controls.headerSubtitle) {
    const subtitle = controls.subtitle.textContent.trim();
    controls.headerSubtitle.textContent = subtitle;
    controls.headerSubtitle.hidden = !subtitle;
  }

  if (!controls.headerMeta) return;
  controls.headerMeta.replaceChildren();
  controls.tags.forEach((tag) => controls.headerMeta.append(element("span", "journal-entry-tag", tag)));
  if (controls.linkedItemKeys.length) {
    controls.headerMeta.append(element(
      "span",
      "journal-entry-link-count",
      \`\${controls.linkedItemKeys.length} link\${controls.linkedItemKeys.length === 1 ? "" : "s"}\`
    ));
  }
  controls.headerMeta.hidden = !controls.tags.length && !controls.linkedItemKeys.length;
}

function renderJournalEditorOpenLink(target) {
  const button = element("button", "journal-link");
  const context = journalTargetContext(target);
  const label = plainText(target.itemText);
  button.type = "button";
  button.title = \`Open \${context} / \${label}\`;
  button.setAttribute("aria-label", \`Open linked item \${label}\`);
  button.append(
    element("span", "journal-link-context", trimText(context, 90)),
    element("span", "journal-link-title", trimText(label, 120))
  );
  button.addEventListener("click", () => openJournalTarget(target.key));
  return button;
}

function journalCommandOptions(range) {
  const text = range.text;

  const link = text.match(/^\\/link(?:\\s+(.*))?$/i);
  if (link) return journalLinkCommandOptions(link[1] || "");

  const plan = text.match(/^\\/plan(?:\\s+(.*))?$/i);
  if (plan) return journalPlanCommandOptions(plan[1] || "");

  const command = text.match(/^\\/([a-z-]*)$/i);
  if (command) {
    const query = command[1].toLowerCase();
    const options = JOURNAL_COMMANDS
      .filter((item) => journalCommandMatches(item, query))
      .sort((left, right) => journalCommandScore(right, query) - journalCommandScore(left, query))
      .map((item) => ({ type: "command", ...item }));
    if (query && !options.length && !isReservedJournalCommand(query)) {
      options.push({ type: "tag", label: \`Tag "\${query}"\`, detail: "Add tag", tag: query });
    }
    return options;
  }

  return [];
}

function journalCommandMatches(command, query) {
  if (!query) return true;
  return command.id.startsWith(query) || (command.aliases || []).some((alias) => alias.startsWith(query));
}

function journalCommandScore(command, query) {
  if (!query) return 0;
  if ((command.aliases || []).includes(query)) return 3;
  if (command.id === query) return 2;
  if (command.id.startsWith(query)) return 1;
  return 0;
}

function journalLinkCommandOptions(query) {
  return journalTargetCommandOptions(getJournalLinkTargets(), query);
}

function journalPlanCommandOptions(query) {
  return journalTargetCommandOptions(getJournalPlanLinkTargets(), query);
}

function journalTargetCommandOptions(targets, query) {
  const normalizedQuery = query.trim().toLowerCase();
  return targets
    .filter((target) => journalLinkOptionSearchText(target).includes(normalizedQuery))
    .slice(0, 8)
    .map((target) => ({
      type: "link",
      key: target.key,
      label: trimText(plainText(target.itemText), 80),
      detail: journalTargetContext(target)
    }));
}

function getJournalPlanLinkTargets() {
  return getJournalLinkTargets().filter((target) => state.favorites?.[target.key]);
}

function journalLinkOptionSearchText(target) {
  return \`\${plainText(target.itemText)} \${journalTargetContext(target)}\`.toLowerCase();
}

function unquoteJournalCommandValue(value) {
  const trimmed = String(value).trim();
  const quoted = trimmed.match(/^"([^"]+)"$/);
  return quoted ? quoted[1] : trimmed;
}

function addJournalTag(controls, tag) {
  const normalized = tag.trim();
  if (!normalized) return;
  if (controls.tags.some((item) => item.toLowerCase() === normalized.toLowerCase())) return;
  controls.tags.push(normalized);
}

function addJournalLink(controls, key) {
  if (!key || controls.linkedItemKeys.includes(key)) return;
  const wasEmpty = !controls.linkedItemKeys.length;
  controls.linkedItemKeys.push(key);
  if (wasEmpty && controls.linkedItemKeys.length === 1) applyJournalLinkSubtitle(controls, key);
}

function clearJournalSubtitle(controls) {
  if (!controls?.subtitle) return;
  controls.subtitle.textContent = "";
  controls.subtitle.hidden = true;
  controls.subtitleSource = "";
}

function clearJournalLinks(controls) {
  if (!controls) return;
  controls.linkedItemKeys = [];
}

function clearJournalTags(controls) {
  if (!controls) return;
  controls.tags = [];
}

function applyJournalLinkSubtitle(controls, key) {
  if (!controls.subtitle || controls.subtitleSource === "manual") return;

  const target = getJournalTarget(key);
  const label = target ? plainText(target.itemText) : key;
  const subtitle = journalSubtitleFromLinkLabel(label);
  if (!subtitle) return;

  controls.subtitle.textContent = subtitle;
  controls.subtitle.hidden = false;
  controls.subtitleSource = "link";
}

function journalSubtitleFromLinkLabel(label) {
  const normalized = String(label || "").trim();
  const splitLabel = normalized.match(/^([^:]+):\\s+.+$/);
  return splitLabel ? splitLabel[1].trim() : normalized;
}

function journalEditorSubtitleText(controls) {
  return controls.subtitle?.textContent.trim() || "";
}

function journalInitialSubtitleSource(entry) {
  const subtitle = typeof entry?.subtitle === "string" ? entry.subtitle.trim() : "";
  if (!subtitle) return "";
  return entry?.subtitleSource === "link" ? "link" : "manual";
}

function isReservedJournalCommand(value) {
  const normalized = String(value).toLowerCase();
  return JOURNAL_COMMANDS.some((command) => command.id === normalized || (command.aliases || []).includes(normalized));
}

function uniqueJournalTags(tags) {
  const seen = new Set();
  return tags
    .map((tag) => String(tag).trim())
    .filter(Boolean)
    .filter((tag) => {
      const key = tag.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function uniqueJournalLinks(keys) {
  return Array.from(new Set(keys.filter((key) => typeof key === "string" && key)));
}
`,x=`let editingJournalId = "";
let pendingJournalFocusId = "";
const JOURNAL_AUTOSAVE_DELAY_MS = 2000;
const journalInlineEditorControls = new Map();
const journalInlineAutosaveTimers = new Map();

function openJournalCreate() {
  saveJournalInlineEditors();
  if (getActiveJournalTypeFilter() === "activity") state.journalTypeFilter = "notes";
  editingJournalId = "";
  const entry = createJournalEntry(journalCreateEntryData());
  if (!entry) return;
  expandedJournalIds = new Set([entry.id]);
  pendingJournalFocusId = entry.id;
  render();
  document.querySelector(\`[data-journal-id="\${entry.id}"]\`)?.scrollIntoView({ block: "nearest" });
}

function journalCreateEntryData() {
  const linkFilter = getActiveJournalLinkFilter();
  const tagFilter = getActiveJournalTagFilter();
  const subtitle = journalCreateSubtitleFromLinkFilter(linkFilter);
  return {
    title: "Notes",
    subtitle,
    subtitleSource: subtitle ? "link" : "",
    date: todayDate(),
    type: JOURNAL_TYPES[0],
    linkedItemKeys: linkFilter ? [linkFilter] : [],
    tags: tagFilter ? [tagFilter] : [],
    body: ""
  };
}

function journalCreateSubtitleFromLinkFilter(key) {
  if (!key) return "";
  const target = getJournalTarget(key);
  const label = target ? plainText(target.itemText) : key;
  return journalSubtitleFromLinkLabel(label);
}

function closeJournalEditor() {
  destroyAllJournalEditors();
  editingJournalId = "";
  render();
}

function renderJournalForm() {
  const entry = editingJournalId ? state.journal.find((item) => item.id === editingJournalId) : null;
  if (!entry) return null;

  const overlay = element("div", "journal-overlay");
  const form = element("form", "journal-editor");
  const title = document.createElement("input");
  title.name = "title";
  title.required = true;
  title.placeholder = "Entry title";
  title.className = "journal-title-input";
  title.value = entry?.title || "Notes";

  const subtitle = element("div", "journal-editor-subtitle", entry?.subtitle || "");
  subtitle.hidden = !subtitle.textContent;
  const date = element("div", "journal-editor-date", formatDate(entry?.date || todayDate()));

  const bodyHost = element("div", "journal-command-host journal-focused-note-wrap");
  const controls = createJournalEditorControls(entry, title, subtitle);
  controls.editor = mountJournalEditor({
    element: bodyHost,
    markdown: entry?.body || "",
    placeholder: "Notes",
    mode: "focused",
    metadata: controls,
    onKeydown: (event) => handleJournalBodyKeydown(event, form, entry, controls)
  });
  title.addEventListener("keydown", (event) => {
    if (isSaveShortcut(event)) {
      event.preventDefault();
      saveJournalForm(entry, controls);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      focusJournalEditor(controls.editor);
    }
  });

  const header = element("div", "journal-editor-header");
  header.append(title, subtitle, renderJournalEditorMeta(controls), date);
  form.append(header, bodyHost, renderJournalFormActions(entry, controls));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveJournalForm(entry, controls);
  });
  form.addEventListener("keydown", handleJournalEditorKeydown);
  overlay.append(form);

  setTimeout(() => focusJournalEditor(controls.editor), 0);
  return overlay;
}

function renderJournalExpansionEditor(entry, header = {}) {
  const wrapper = element("div", "journal-expanded-editor");
  const title = document.createElement("input");
  title.value = entry?.title || "Notes";
  const subtitle = element("div", "journal-editor-subtitle", entry?.subtitle || "");
  subtitle.hidden = true;

  const controls = createJournalEditorControls(entry, title, subtitle);
  controls.headerTitle = header.title || null;
  controls.headerSubtitle = header.subtitle || null;
  controls.headerMeta = header.meta || null;
  const noteWrap = element("div", "journal-inline-note-wrap journal-expanded-note-wrap");
  controls.editor = mountJournalEditor({
    element: noteWrap,
    markdown: entry?.body || "",
    placeholder: "Notes",
    mode: "inline",
    metadata: controls,
    onChange: () => handleJournalInlineEditorChange(entry.id, controls),
    onKeydown: (event) => handleJournalAutosaveBodyKeydown(event, entry, controls)
  });
  journalInlineEditorControls.set(entry.id, controls);

  const meta = renderJournalEditorMeta(controls);
  const links = renderJournalEditorLinks(controls);
  controls.onMetadataChange = () => scheduleJournalInlineAutosave(entry.id, controls);
  wrapper.append(meta, noteWrap, links);
  setTimeout(() => {
    resizeJournalEditor(controls.editor);
    if (pendingJournalFocusId !== entry.id) return;
    pendingJournalFocusId = "";
    focusJournalEditor(controls.editor);
  }, 0);
  return wrapper;
}

function handleJournalEditorKeydown(event) {
  if (event.key !== "Escape") return;
  event.preventDefault();
  event.stopPropagation();
  closeJournalEditor();
}

function renderJournalFormActions(entry, controls) {
  const actions = element("div", "journal-form-actions");
  const close = element("button", "journal-icon-btn", "×");
  close.type = "button";
  close.title = "Close editor";
  close.setAttribute("aria-label", "Close journal editor");
  close.addEventListener("click", closeJournalEditor);

  const save = element("button", "journal-icon-btn primary", "✓");
  save.type = "submit";
  save.title = entry ? "Save journal entry" : "Post journal entry";
  save.setAttribute("aria-label", entry ? "Save journal entry" : "Post journal entry");
  actions.append(close, save);

  return actions;
}

function saveJournalForm(entry, controls) {
  const data = journalFormData(entry, controls);

  if (entry) {
    updateJournalEntry(entry.id, data);
    editingJournalId = "";
  } else {
    createJournalEntry(data);
  }
  render();
}

function saveJournalInlineEditors() {
  if (!journalInlineEditorControls.size) {
    clearJournalInlineAutosaves();
    return;
  }

  Array.from(journalInlineEditorControls.entries()).forEach(([entryId, controls]) => {
    saveJournalInlineEditor(entryId, controls);
  });
  journalInlineEditorControls.clear();
}

function saveJournalInlineEditor(entryId, controls = journalInlineEditorControls.get(entryId)) {
  clearJournalInlineAutosave(entryId);
  const entry = state.journal.find((item) => item.id === entryId);
  if (!entry || !controls) return;

  const data = journalFormData(entry, controls);
  if (!journalEntryDataChanged(entry, data)) return;
  updateJournalEntry(entry.id, data);
  saveState();
}

function handleJournalInlineEditorChange(entryId, controls) {
  resizeJournalEditor(controls.editor);
  scheduleJournalInlineAutosave(entryId, controls);
}

function scheduleJournalInlineAutosave(entryId, controls) {
  if (!entryId || !controls) return;

  clearJournalInlineAutosave(entryId);
  const timer = setTimeout(() => {
    journalInlineAutosaveTimers.delete(entryId);
    saveJournalInlineEditor(entryId, controls);
  }, JOURNAL_AUTOSAVE_DELAY_MS);
  journalInlineAutosaveTimers.set(entryId, timer);
}

function clearJournalInlineAutosave(entryId) {
  const timer = journalInlineAutosaveTimers.get(entryId);
  if (!timer) return;
  clearTimeout(timer);
  journalInlineAutosaveTimers.delete(entryId);
}

function clearJournalInlineAutosaves() {
  Array.from(journalInlineAutosaveTimers.keys()).forEach(clearJournalInlineAutosave);
}

function journalFormData(entry, controls) {
  const subtitle = controls.subtitle.textContent.trim();
  return {
    title: controls.title.value.trim() || "Notes",
    subtitle,
    subtitleSource: subtitle ? controls.subtitleSource || "" : "",
    date: entry?.date || todayDate(),
    type: entry?.type || JOURNAL_TYPES[0],
    linkedItemKeys: uniqueJournalLinks(controls.linkedItemKeys || []),
    tags: uniqueJournalTags(controls.tags || []),
    body: unescapeJournalBody(getJournalEditorMarkdown(controls.editor))
  };
}

function journalEntryDataChanged(entry, data) {
  const tags = Array.isArray(entry.tags) ? entry.tags : [];
  const linkedItemKeys = Array.isArray(entry.linkedItemKeys) ? entry.linkedItemKeys : [];
  if ((entry.title || "") !== data.title) return true;
  if ((entry.subtitle || "") !== data.subtitle) return true;
  if ((entry.subtitleSource || "") !== data.subtitleSource) return true;
  if ((entry.body || "") !== data.body) return true;
  if ((entry.date || "") !== data.date) return true;
  if ((entry.type || "") !== data.type) return true;
  if (tags.join("\\n") !== data.tags.join("\\n")) return true;
  if (linkedItemKeys.join("\\n") !== data.linkedItemKeys.join("\\n")) return true;
  return false;
}

function handleJournalBodyKeydown(event, form, entry, controls) {
  if (isSaveShortcut(event)) {
    event.preventDefault();
    saveJournalForm(entry, controls);
  }
}

function handleJournalAutosaveBodyKeydown(event, entry, controls) {
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    closeJournalExpandedEditor(entry.id, controls);
    return;
  }

  if (isSaveShortcut(event)) {
    event.preventDefault();
    closeJournalExpandedEditor(entry.id, controls);
  }
}

function isSaveShortcut(event) {
  return event.key === "Enter" && (event.ctrlKey || event.metaKey);
}

function unescapeJournalBody(value) {
  return String(value).replace(/\\\\\\//g, "/");
}

function closeJournalExpandedEditor(entryId, controls) {
  clearJournalInlineAutosave(entryId);
  const entry = state.journal.find((item) => item.id === entryId);
  if (!entry || !controls) return;

  const data = journalFormData(entry, controls);
  journalInlineEditorControls.delete(entryId);
  expandedJournalIds.delete(entryId);

  if (isJournalEntryEffectivelyEmpty(data)) {
    removeJournalEntry(entryId);
  } else if (journalEntryDataChanged(entry, data)) {
    updateJournalEntry(entryId, data);
  }

  render();
}

function isJournalEntryEffectivelyEmpty(data) {
  const title = String(data?.title || "").trim();
  const subtitle = String(data?.subtitle || "").trim();
  const hasCustomTitle = title && title !== "Notes";
  const hasManualSubtitle = subtitle && data?.subtitleSource !== "link";
  return !hasCustomTitle
    && !hasManualSubtitle
    && !journalBodyHasContent(data?.body || "");
}

function journalBodyHasContent(body) {
  const normalized = String(body || "")
    .replace(/[\\u00a0\\u200B\\u200C\\u200D\\uFEFF]/g, "")
    .replace(/<br\\s*\\/?>/gi, "")
    .replace(/&nbsp;/gi, "")
    .trim();
  return Boolean(normalized);
}
`,R=`let expandedJournalIds = new Set();

function renderJournalEntry(entry) {
  const card = element("article", "journal-card");
  const expanded = expandedJournalIds.has(entry.id);
  const header = {};
  card.dataset.journalId = entry.id;
  card.classList.toggle("expanded", expanded);
  card.append(renderJournalRow(entry, expanded, header), renderJournalExpansion(entry, expanded, header));
  return card;
}

function renderJournalRow(entry, expanded, header = {}) {
  const row = element("div", "journal-row");
  const toggle = element("button", "journal-row-toggle");
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.setAttribute("aria-controls", journalPanelId(entry));
  toggle.addEventListener("click", (event) => {
    toggleJournalEntryExpansion(entry.id, event.metaKey || event.ctrlKey);
  });

  const content = element("div", "journal-row-content");
  const title = element("h3", "journal-card-title", entry.title);
  const subtitle = element("div", "journal-card-subtitle", entry.subtitle || "");
  subtitle.hidden = !entry.subtitle;
  const meta = renderJournalEntryMeta(entry);
  header.title = title;
  header.subtitle = subtitle;
  header.meta = meta;
  content.append(title);
  content.append(subtitle, meta);

  toggle.append(content);

  const side = element("div", "journal-row-side");
  side.append(renderJournalDate(entry), renderJournalActions(entry));
  row.append(toggle, side);
  return row;
}

function renderJournalExpansion(entry, expanded, header = {}) {
  const panel = element("div", "journal-expand");
  panel.id = journalPanelId(entry);
  panel.setAttribute("aria-hidden", String(!expanded));
  panel.inert = !expanded;

  const inner = element("div", "journal-expand-inner");
  const content = element("div", "journal-expand-content");
  if (expanded) {
    content.append(renderJournalExpansionEditor(entry, header));
  }

  inner.append(content);
  panel.append(inner);
  return panel;
}

function renderJournalEntryMeta(entry) {
  const tags = entry.tags || [];
  const linkedItemKeys = entry.linkedItemKeys || [];
  const meta = element("div", "journal-entry-meta");
  tags.forEach((tag) => meta.append(renderJournalEntryTag(tag)));
  if (linkedItemKeys.length) {
    meta.append(element("span", "journal-entry-link-count", \`\${linkedItemKeys.length} link\${linkedItemKeys.length === 1 ? "" : "s"}\`));
  }
  meta.hidden = !tags.length && !linkedItemKeys.length;
  return meta;
}

function renderJournalEntryTag(tag) {
  const chip = element("span", "journal-entry-tag", tag);
  chip.title = \`Filter journal by #\${tag}\`;
  chip.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openJournalTagFilter(tag);
  });
  return chip;
}

function renderJournalDate(entry) {
  const wrapper = element("div", "journal-row-date");
  const chip = element("button", "date-chip journal-date-chip", formatDate(entry.date));
  chip.type = "button";
  chip.title = "Edit journal date";
  chip.setAttribute("aria-label", \`Edit date for \${entry.title}\`);
  chip.addEventListener("click", () => {
    wrapper.replaceChildren(renderJournalDateEditor(entry));
  });
  wrapper.append(chip);
  return wrapper;
}

function renderJournalDateEditor(entry) {
  const editor = element("div", "date-editor journal-date-editor");
  const input = document.createElement("input");
  input.type = "date";
  input.value = entry.date || todayDate();
  input.setAttribute("aria-label", \`Date for \${entry.title}\`);

  const save = () => {
    if (isValidDate(input.value)) updateJournalEntry(entry.id, { date: input.value });
    render();
  };

  input.addEventListener("change", save);
  input.addEventListener("blur", save);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      save();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      render();
    }
  });

  setTimeout(() => {
    input.focus();
    if (typeof input.showPicker === "function") input.showPicker();
  }, 0);

  editor.append(input);
  return editor;
}

function renderJournalActions(entry) {
  const actions = element("div", "journal-row-actions");
  const edit = element("button", "icon-btn", "✎");
  edit.type = "button";
  edit.title = "Focused edit";
  edit.setAttribute("aria-label", \`Open focused editor for \${entry.title}\`);
  edit.addEventListener("click", () => openJournalFocusedEdit(entry.id));

  const remove = element("button", "icon-btn danger", "×");
  remove.type = "button";
  remove.title = "Delete journal entry";
  remove.setAttribute("aria-label", \`Delete \${entry.title}\`);
  remove.addEventListener("click", () => {
    expandedJournalIds.delete(entry.id);
    deleteJournalEntry(entry.id);
  });
  actions.append(edit, remove);
  return actions;
}

function openJournalFocusedEdit(entryId) {
  editingJournalId = entryId;
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function toggleJournalEntryExpansion(entryId, keepOtherEntriesOpen) {
  saveJournalInlineEditors();

  if (keepOtherEntriesOpen) {
    const nextExpanded = !expandedJournalIds.has(entryId);
    if (nextExpanded) {
      expandedJournalIds.add(entryId);
      pendingJournalFocusId = entryId;
    } else {
      expandedJournalIds.delete(entryId);
      if (pendingJournalFocusId === entryId) pendingJournalFocusId = "";
    }
    render();
    return;
  }

  const onlyExpandedEntry = expandedJournalIds.size === 1 && expandedJournalIds.has(entryId);
  expandedJournalIds = onlyExpandedEntry ? new Set() : new Set([entryId]);
  pendingJournalFocusId = onlyExpandedEntry ? "" : entryId;
  render();
}

function journalPanelId(entry) {
  return \`journal-entry-\${entry.id}-body\`;
}
`,L=`function renderJournal() {
  dom.main.replaceChildren();

  const entries = getJournalEntries();
  const activity = getJournalActivityEvents();
  const timeline = getJournalTimelineItems();
  const header = renderHeader("Journal", "Capture study notes, reflections, questions, and practice logs.", "Study");
  const meta = element("div", "journal-header-meta");
  meta.append(element("p", "path-note", journalTimelineCountLabel(entries.length, activity.length)), renderJournalToolbar());
  header.append(meta);
  const filters = renderJournalFilters();
  if (filters) header.append(filters);
  dom.main.append(header);

  const form = renderJournalForm();
  if (form) dom.main.append(form);

  const groups = getJournalGroupsForRender(timeline);
  if (!groups.length) {
    dom.main.append(element("p", "empty", journalEmptyMessage()));
    return;
  }

  const wrapper = element("div", "journal-groups");
  groups.forEach((group) => {
    const section = element("section", "journal-group");
    section.id = \`journal-\${group.month}\`;
    const heading = element("div", "journal-group-heading");
    heading.append(
      element("h3", "", group.title),
      element("span", "review-count", \`\${journalGroupDisplayCount(group)}\`)
    );
    section.append(heading);

    const list = element("div", "journal-list");
    group.items.forEach((item) => {
      list.append(item.type === "activity" ? renderJournalActivityEvent(item.event) : renderJournalEntry(item.entry));
    });
    section.append(list);
    wrapper.append(section);
  });

  dom.main.append(wrapper);
}

function journalTimelineCountLabel(noteCount, activityCount) {
  const noteLabel = \`\${noteCount} \${noteCount === 1 ? "note" : "notes"}\`;
  const activityLabel = \`\${activityCount} \${activityCount === 1 ? "activity event" : "activity events"}\`;
  return \`\${noteLabel}, \${activityLabel} shown.\`;
}

function renderJournalActivityEvent(event) {
  const item = element("div", "journal-activity");
  const content = element("div", "journal-activity-content");
  const side = element("div", "journal-activity-side");
  const actions = element("div", "journal-row-actions journal-activity-actions");
  const remove = element("button", "icon-btn danger", "×");

  remove.type = "button";
  remove.title = "Delete activity event";
  remove.setAttribute("aria-label", "Delete activity event");
  remove.addEventListener("click", () => deleteJournalActivityEvent(event.id));

  content.append(element("div", "journal-activity-message", event.message));
  if (event.context) content.append(element("div", "journal-activity-context", event.context));
  actions.append(remove);
  side.append(element("time", "journal-timeline-date journal-activity-date", formatDate(event.date)), actions);
  item.append(
    element("span", "journal-activity-line", ""),
    content,
    side
  );
  return item;
}

function renderJournalFilters() {
  const filters = [
    renderJournalLinkFilter(),
    renderJournalTagFilter()
  ].filter(Boolean);
  if (!filters.length) return null;

  const wrapper = element("div", "journal-filters");
  wrapper.append(...filters);
  return wrapper;
}

function renderJournalLinkFilter() {
  const key = getActiveJournalLinkFilter();
  if (!key) return null;
  const target = getJournalTarget(key);
  const text = target
    ? trimText(plainText(target.itemText), 110)
    : trimText(key, 110);
  const context = target ? journalTargetContext(target) : "Linked item";
  return renderJournalFilter("Linked to", text, context, "Clear linked item filter", clearJournalLinkFilter);
}

function renderJournalTagFilter() {
  const tag = getActiveJournalTagFilter();
  if (!tag) return null;
  return renderJournalFilter("Tagged", \`#\${tag}\`, "Journal tag", "Clear tag filter", clearJournalTagFilter);
}

function renderJournalFilter(kicker, title, context, clearTitle, onClear) {
  const wrapper = element("div", "journal-filter");
  const label = element("div", "journal-filter-label");
  label.append(
    element("span", "journal-filter-kicker", kicker),
    element("span", "journal-filter-title", title),
    element("span", "journal-filter-context", context)
  );

  const clear = element("button", "journal-filter-clear", "×");
  clear.type = "button";
  clear.title = clearTitle;
  clear.setAttribute("aria-label", clearTitle);
  clear.addEventListener("click", onClear);

  wrapper.append(label, clear);
  return wrapper;
}

function journalEmptyMessage() {
  if (getActiveJournalLinkFilter() && getActiveJournalTagFilter()) return "No journal entries match the current journal filters.";
  if (getActiveJournalLinkFilter()) return "No journal entries are linked to this item.";
  if (getActiveJournalTagFilter()) return "No journal entries match this tag.";
  if (getActiveJournalTypeFilter() === "notes") {
    return state.query.trim() ? "No journal notes match the current search." : "No journal notes yet.";
  }
  if (getActiveJournalTypeFilter() === "activity") {
    return state.query.trim() ? "No activity events match the current search." : "No activity events yet.";
  }
  return state.query.trim() ? "No journal entries match the current search." : "No journal entries yet.";
}

function renderJournalToolbar() {
  const toolbar = element("div", "journal-toolbar");
  const add = element("button", "journal-add", "+");
  add.type = "button";
  add.title = "Add journal entry";
  add.setAttribute("aria-label", "Add journal entry");
  add.addEventListener("click", openJournalCreate);
  add.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    openJournalCreate();
  });
  toolbar.append(
    renderPdfExportButton("Export journal as PDF", exportJournalPdf),
    add
  );
  return toolbar;
}

function renderJournalNav() {
  const groups = getJournalGroupsForRender(getJournalTimelineItems());
  if (!groups.length) {
    const item = element("li");
    item.append(element("p", "empty", journalEmptyMessage()));
    dom.nav.append(item);
    return;
  }

  groups.forEach((group) => {
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.append(
      element("span", "journal-nav-dot", ""),
      element("span", "nav-title-text", group.title),
      element("span", "nav-prog", \`\${journalGroupDisplayCount(group)}\`)
    );
    row.addEventListener("click", () => {
      document.getElementById(\`journal-\${group.month}\`)?.scrollIntoView({ block: "start" });
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      document.getElementById(\`journal-\${group.month}\`)?.scrollIntoView({ block: "start" });
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}

function getJournalGroupsForRender(entries) {
  return groupJournalTimelineItems(entries).sort((left, right) => String(right.month).localeCompare(String(left.month)));
}

function journalGroupDisplayCount(group) {
  return group.items.length;
}
`,D=`function render() {
  if (typeof saveJournalInlineEditors === "function") saveJournalInlineEditors();
  destroyAllJournalEditors();

  if ((state.tab === "favorites" || state.tab === "custom") && (state.view === "chapter" || state.view === "track")) {
    state.view = "overview";
  }
  if (state.view === "track" && state.tab !== "specializations") {
    state.view = "overview";
  }

  const standaloneView = ["map", "guide", "review", "journal", "portfolio", "reference", "sources"].includes(state.view);
  const visible = standaloneView || state.tab === "favorites" || state.tab === "custom" ? [] : getVisibleChapters();
  if (!standaloneView && state.tab !== "favorites" && state.tab !== "custom") {
    ensureSelection(visible);
    if (state.tab === "specializations") ensureSpecializationTrack(visible);
  }
  updateTabButtons();
  updateViewButtons();
  renderOverallProgress(visible);
  renderNav(visible);

  if (state.view === "guide" || state.view === "map") {
    renderSupportView(roadmap.support.guide, "Guide", "Roadmap Guide");
  } else if (state.view === "review") {
    renderReview();
  } else if (state.view === "journal") {
    renderJournal();
  } else if (state.view === "portfolio") {
    renderSupportView(roadmap.support.portfolio, "Portfolio");
  } else if (state.view === "reference") {
    renderSupportView(roadmap.support.reference, "Reference");
  } else if (state.view === "sources") {
    renderSupportView(roadmap.support.sources, "Sources", "Official Sources");
  } else if (state.view === "chapter") {
    renderChapter(visible);
  } else if (state.view === "track") {
    renderSpecializationTrack(visible);
  } else if (state.tab === "favorites") {
    renderFavorites();
  } else if (state.tab === "custom") {
    renderCustom();
  } else if (state.tab === "specializations") {
    renderSpecializationOverview(visible);
  } else {
    renderOverview(visible);
  }

  saveState();
}

function renderOverallProgress(visible) {
  if (["map", "guide", "reference", "sources"].includes(state.view)) {
    const labels = {
      map: "Guide",
      guide: "Guide",
      reference: "Reference",
      sources: "Sources"
    };
    dom.progressScope.textContent = labels[state.view];
    dom.overallPct.textContent = "-";
    dom.overallBar.style.width = "0%";
    return;
  }

  if (state.view === "portfolio") {
    const progress = getPortfolioProgress();
    dom.progressScope.textContent = "Portfolio";
    dom.overallPct.textContent = \`\${progress.percent}%\`;
    dom.overallBar.style.width = \`\${progress.percent}%\`;
    return;
  }

  if (state.view === "review") {
    const reviewItems = getReviewItems();
    dom.progressScope.textContent = "Review";
    dom.overallPct.textContent = \`\${reviewItems.length}\`;
    dom.overallBar.style.width = "0%";
    return;
  }

  if (state.view === "journal") {
    const entries = getJournalTimelineItems();
    dom.progressScope.textContent = "Journal";
    dom.overallPct.textContent = \`\${entries.length}\`;
    dom.overallBar.style.width = "0%";
    return;
  }

  if (state.tab === "favorites") {
    const progress = getFavoriteProgress();
    dom.progressScope.textContent = "Plan";
    dom.overallPct.textContent = \`\${progress.percent}%\`;
    dom.overallBar.style.width = \`\${progress.percent}%\`;
    return;
  }

  if (state.tab === "custom") {
    const progress = getCustomProgress();
    dom.progressScope.textContent = "Custom";
    dom.overallPct.textContent = \`\${progress.percent}%\`;
    dom.overallBar.style.width = \`\${progress.percent}%\`;
    return;
  }

  if (state.tab === "specializations" && (state.view === "track" || state.view === "chapter")) {
    const track = getSpecializationTrackById(visible, state.specializationTrack);
    if (track) {
      const progress = getProgressForChapters(track.chapters);
      dom.progressScope.textContent = track.title;
      dom.overallPct.textContent = \`\${progress.percent}%\`;
      dom.overallBar.style.width = \`\${progress.percent}%\`;
      return;
    }
  }

  const progress = getProgressForChapters(visible);
  const scope = state.tab === "core" ? "Core" : "Specializations";
  dom.progressScope.textContent = scope;
  dom.overallPct.textContent = \`\${progress.percent}%\`;
  dom.overallBar.style.width = \`\${progress.percent}%\`;
}
`,M=`const markdown = window.ROADMAP_MARKDOWN || "";

const dom = {
  tabButtons: Array.from(document.querySelectorAll("[data-tab]")),
  search: document.getElementById("searchInput"),
  levelFilter: document.getElementById("levelFilter"),
  journalTypeFilter: document.getElementById("journalTypeFilter"),
  journalTypeFilterGroup: document.getElementById("journalTypeFilterGroup"),
  progressScope: document.getElementById("progressScope"),
  overallPct: document.getElementById("overallPct"),
  overallBar: document.getElementById("overallBar"),
  nav: document.getElementById("nav"),
  main: document.getElementById("main"),
  guideBtn: document.getElementById("guideBtn"),
  reviewBtn: document.getElementById("reviewBtn"),
  journalBtn: document.getElementById("journalBtn"),
  portfolioBtn: document.getElementById("portfolioBtn"),
  referenceBtn: document.getElementById("referenceBtn"),
  sourcesBtn: document.getElementById("sourcesBtn"),
  exportBackupBtn: document.getElementById("exportBackupBtn"),
  importBackupBtn: document.getElementById("importBackupBtn"),
  importBackupInput: document.getElementById("importBackupInput"),
  resetBtn: document.getElementById("resetBtn")
};

const roadmap = parseRoadmap(markdown);
let state = createDefaultState();

window.roadmapReady = initializeApp();

async function initializeApp() {
  state = await loadState();
  initializeControls();
  bindEvents();
  render();
}
`,O=[t,r,i,a,o,s,c,l,d,u,p,m,g,y,h,f,v,k,b,S,w,C,I,A,T,E,P,x,R,L,D,M];F().catch(e=>{console.error("Failed to initialize the app.",e)});async function F(){for(const e of O)N(e)}function N(e){const n=document.createElement("script");n.textContent=e,document.head.append(n)}
