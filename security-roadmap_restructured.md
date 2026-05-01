# Security Learning Roadmap

Updated: 2026-04-30

This is the restructured version of `security-roadmap_combined.md`. It keeps the same coverage, but uses one clearer hierarchy: map and navigation first, then the ordered core curriculum, then specialist domains, then practice artifacts, then reference material.

The key distinction is:

- Core Curriculum: what to learn first, in pedagogical order.
- Specializations: where to go deeper after or alongside the core.
- Practice Portfolio: what to produce to prove understanding.
- Learning Paths: suggested routes through the curriculum, specializations, and practice work.
- Reference Library: what to look up while studying or applying the roadmap.

## 1. Map And How To Use This Roadmap

### 1.1 What This Roadmap Is

This roadmap is for building a broad foundation across information security, cybersecurity, data security, privacy, säkerhetsskydd, EU and Swedish regulation, technical security, management, cloud security, embedded R&D, AI/LLM/agentic security, defence industry, IoT, automotive, and cross-domain security work.

It is not legal advice. For legal, regulatory, procurement, or compliance decisions, verify against current official texts and involve qualified counsel.

### 1.2 How The Roadmap Is Organized

There are three content layers:

1. Core Curriculum: the broad foundation everyone should study first.
2. Specializations: deeper branches for embedded, AI, defence, IoT, automotive, cloud, and cross-domain intersections.
3. Practice Portfolio: concrete artifacts that turn reading into competence.

The Learning Paths below are navigation routes through those layers, not additional content competing with them.

Within chapters, the section types have different purposes:

- Learn: topics, concepts, terms, standards, laws, frameworks, and domain areas to understand.
- Practice: exercises, scenarios, labs, reviews, comparisons, and applied work.
- Deliverables: artifacts, templates, diagrams, memos, playbooks, mappings, and evidence to produce.
- Read / Watch / Courses: source material and training routes.

### 1.3 Pedagogical Order

The order below is deliberately adjusted from the original roadmap. It is easier to learn security if you move from foundations to systems, then controls, then regulation, then domains:

1. Mental model, terminology, and learning method.
2. IT, networking, operating systems, identity, and cloud basics.
3. Governance, risk, policy, audit, suppliers, and management.
4. Core cyber defense: hardening, vulnerability management, endpoint, network, logging, backup.
5. Cloud, infrastructure, SaaS, container, and platform security.
6. Secure engineering, AppSec, DevSecOps, software supply chain.
7. Data security, privacy, and records.
8. Detection, incident response, forensics, threat intelligence, business continuity, and disaster recovery.
9. EU and Swedish regulation, including NIS2/Cybersäkerhetslagen, GDPR, DORA, CER, CRA, AI Act, LEK.
10. Säkerhetsskydd in depth.
11. Offensive security and assurance.
12. Leadership, soft skills, and security strategy.
13. Specialist verticals: embedded R&D, AI/LLM/agentic, defence industry, IoT, automotive, cloud.
14. Cross-domain intersections and specialization paths.

This order gives you enough technical and management context before the laws, and enough legal context before the sector-specific areas.

### 1.4 How To Study

Do not try to learn everything linearly or exhaustively. Work in cycles:

1. Build a mental map.
2. Anchor in one major framework, preferably NIST CSF 2.0 or ISO/IEC 27001.
3. Learn enough technical breadth to ask good questions.
4. Learn enough governance and risk to explain why controls matter.
5. Create evidence: diagrams, risk assessments, policies, control mappings, incident reports, threat models, and architecture notes.
6. Specialize based on role, market, and interest.

Every topic should eventually produce one of these artifacts:

- A one-page explanation.
- A diagram.
- A checklist.
- A risk assessment.
- A control mapping.
- A procedure or runbook.
- A test or lab report.
- A decision memo.

### 1.5 Core Mental Model

Security is not one discipline. It is the coordination of people, process, technology, law, and business risk under adversarial conditions.

#### Foundational Concepts

- CIA triad: confidentiality, integrity, availability.
- AAA: authentication, authorization, accounting/auditing.
- Authenticity, accountability, non-repudiation, privacy, safety, resilience.
- Threat, vulnerability, risk, control, exposure, likelihood, impact, residual risk.
- Defense in depth.
- Least privilege, need to know, separation of duties.
- Assume breach.
- Security by design and privacy by design.
- Compliance as a floor, not a ceiling.
- Kill-chain and attack-path thinking.
- Threat actors: opportunistic criminals, organized crime, insiders, hacktivists, competitors, nation-state actors, foreign intelligence services.

#### Important Distinctions

- Information security: protecting information in all forms, including digital, paper, spoken, process, people, suppliers, and facilities.
- Cybersecurity: protecting digital systems, networks, identities, software, services, and digital data from cyber threats.
- IT security: operational security of endpoints, servers, networks, SaaS, cloud, identity, logging, backup, and configuration.
- Data security: protecting data through its lifecycle: collection, use, sharing, storage, retention, deletion, leakage prevention, and encryption.
- Privacy and data protection: lawful, fair, transparent, purpose-limited, accountable processing of personal data.
- Säkerhetsskydd: Swedish protective security for security-sensitive activities relevant to Sweden's security or binding international protective security commitments.
- OT/ICS security: protecting industrial control systems, SCADA, PLCs, sensors, actuators, and cyber-physical processes where safety and availability often dominate.
- Product security: building and maintaining secure products through their full lifecycle.
- Embedded security: product security where hardware, firmware, manufacturing, physical access, and field lifecycle are central.
- AI security: security of models, data, prompts, tools, agents, AI pipelines, AI infrastructure, and AI-enabled decisions.
- GRC: governance, risk management, compliance, assurance, audit, policy, metrics, and management reporting.

### 1.6 Domain Map

Use NIST CSF 2.0 as a simple organizing model:

- Govern: strategy, roles, policy, risk appetite, accountability, legal obligations, oversight.
- Identify: assets, business context, dependencies, suppliers, data, risk assessment.
- Protect: access control, awareness, data security, platform security, secure development, maintenance.
- Detect: telemetry, monitoring, anomaly detection, threat hunting, continuous diagnostics.
- Respond: incident handling, communication, analysis, containment, mitigation.
- Recover: restoration, resilience, lessons learned, communication, improvement.

Cross-cutting areas:

- Privacy and data protection.
- Physical and environmental security.
- Personnel security.
- Supplier and supply-chain security.
- Business continuity and crisis management.
- Legal and regulatory compliance.
- Security culture.
- Architecture and secure design.

### 1.7 Learning Paths

Use these as routes through the roadmap. A path tells you which parts of the Core Curriculum to prioritize, which Specializations to add, and which Practice Portfolio artifacts to produce.

#### Broad Generalist: 12-18 Months

##### Months 1-2: Foundations And Framework

- Learn core security terminology.
- Read NIST CSF 2.0 or ISO/IEC 27001 overview.
- Build a small lab.
- Create an asset inventory and network diagram.

##### Months 3-4: Technical Breadth

- Networking, OS basics, identity, TLS/PKI, cloud fundamentals.
- Build and harden Linux/Windows systems.
- Learn Active Directory and Entra ID basics.

##### Months 5-6: Cyber Defense And Cloud

- Vulnerability management, EDR, logging, backup, network segmentation.
- Build a cloud landing zone.
- Write runbooks and hardening baselines.

##### Months 7-8: Secure Engineering And Data

- OWASP Top 10, API security, secure SDLC, DevSecOps.
- Data classification, GDPR basics, DPIA, ROPA.
- Build threat models and data flow diagrams.

##### Months 9-10: IR, Threat Intel, Resilience, And Assurance

- NIST SP 800-61, MITRE ATT&CK, BIA/BCP/DRP basics, tabletop exercises.
- Learn pen-test methodology enough to interpret findings.
- Write an incident report, detection map, and BCP/DRP outline.

##### Months 11-12: EU And Swedish Regulation

- GDPR, NIS2, Cybersäkerhetslagen, DORA, CER, CRA, AI Act, LEK.
- Swedish public-sector rules: OSL, TF/YGL, records, procurement.
- Build an applicability matrix.

##### Months 13-15: Säkerhetsskydd

- Säkerhetsskyddslagen, förordningen, PMFS, Säpo guidance.
- Run a mock säkerhetsskyddsanalys.
- Study SUA, security vetting, classification, supervisory landscape.

##### Months 16-18: Specialize

Pick one track: cloud, AppSec, SOC/IR, privacy, GRC, säkerhetsskydd, embedded, AI, automotive, IoT, defence.

#### Embedded R&D Track

1. Pick a Cortex-M dev kit and read the security reference manual.
2. Build signed firmware with MCUboot or TF-M.
3. Implement secure communications with TLS/DTLS/OSCORE/EDHOC.
4. Learn provisioning and attestation.
5. Do ChipWhisperer tutorials or equivalent side-channel labs.
6. Harden embedded Linux with Yocto, dm-verity, IMA, signed boot.
7. Threat model a product across development, manufacturing, deployment, maintenance, and decommissioning.

#### AI/LLM/Agentic Track

1. Read OWASP LLM Top 10, OWASP Agentic guidance, NIST AI RMF, and AI Act relevant sections.
2. Build a RAG app.
3. Test prompt injection and RAG poisoning.
4. Build a small tool-using agent.
5. Add MCP or equivalent tool integration and review permissions.
6. Run AI red-team tools.
7. Write a DPIA, AI Act tiering memo, and NIST AI RMF mapping.

#### Automotive Cybersecurity Track

1. Read ISO/SAE 21434, UN R155, UN R156, ISO 24089.
2. Learn ISO 26262 and SOTIF context.
3. Run TARA exercises.
4. Study CAN, Ethernet, UDS, DoIP, AUTOSAR, SecOC, HSMs.
5. Study OTA and diagnostic security.
6. Learn VSOC and coordinated disclosure.
7. Produce ISO/SAE 21434 work products.

#### Defence / Säkerhetsskydd Track

1. Read säkerhetsskyddslagen, förordningen, PMFS, Säpo guidance, and KSF where relevant.
2. Run a complete säkerhetsskyddsanalys.
3. Study security vetting and SUA.
4. Study NATO classification and industrial security context.
5. Learn TEMPEST, COMSEC, Common Criteria, and export control basics.
6. Build a defence supplier security plan.

#### IoT Product Security Track

1. Read ETSI EN 303 645, NISTIR 8259/8425, CRA, RED/EN 18031, SUIT/RATS/EDHOC.
2. Build a small device + cloud + app architecture.
3. Implement device identity and secure onboarding.
4. Add signed updates and fleet monitoring.
5. Map controls to CRA and ETSI.
6. Run a privacy assessment for telemetry.
7. Write an EOL and vulnerability disclosure plan.

#### Cloud Security Track

1. Read CSA Cloud Controls Matrix, ISO/IEC 27017, ISO/IEC 27018, NIST SP 800-207, CIS Benchmarks, and the main provider security reference architectures.
2. Build a multi-account, subscription, or project landing zone.
3. Implement identity federation, least privilege, workload identity, privileged access, and break-glass access.
4. Design cloud networking with segmentation, private endpoints, controlled egress, WAF, DDoS protection, and DNS security.
5. Build centralized logging for identity, control plane, network, workload, storage, and SaaS activity.
6. Secure containers, Kubernetes, CI/CD, IaC, secrets, and artifact registries.
7. Write cloud incident runbooks for exposed storage, compromised keys, cryptomining, ransomware, and data leakage.
8. Map cloud controls to ISO/IEC 27001, NIST CSF, CIS Controls, NIS2/Cybersäkerhetslagen, DORA, GDPR, and säkerhetsskydd where relevant.

#### Cross-Domain Track

Pick two:

- Embedded + automotive.
- Embedded + defence.
- AI + automotive.
- AI + IoT.
- AI + cloud.
- Defence + AI.
- Defence + cloud.
- IoT + cloud/platform.
- Automotive + cloud.
- Embedded + cloud/platform.

Expect 18-24 months for credible cross-domain competence.

## 2. Core Curriculum

This is the main ordered learning body. Work through it broadly before going deep, unless your job already forces a specialization.

### Phase 1: IT, Networking, Identity, And Systems Basics

Goal: understand what security protects and how modern systems work.

#### Learn

- Computer basics: CPU, memory, storage, filesystems, processes, services, permissions.
- Linux: users/groups, permissions, sudo, systemd, logs, auditd, SELinux/AppArmor, package management.
- Windows: Active Directory, Group Policy, Kerberos, NTLM, event logs, PowerShell, local security policy.
- macOS: endpoint context, permissions, FileVault, MDM, logs.
- Networking: TCP/IP, DNS, HTTP/HTTPS, TLS, routing, switching, NAT, VPN, proxies, reverse proxies.
- Network architecture: OSI model, IPv4/IPv6, VLANs, routing domains, traffic flows, management plane vs data plane, SDN, CDN, edge networks.
- Wireless: WPA2/WPA3, 802.1X, EAP, enterprise Wi-Fi.
- Email basics: SMTP, SPF, DKIM, DMARC.
- Identity: users, groups, roles, MFA, SSO, federation, SAML, OAuth 2.0/2.1, OIDC, SCIM, FIDO2/WebAuthn, passkeys.
- Databases: relational vs NoSQL, backups, access control, SQL injection basics.
- Cryptography basics: symmetric encryption, asymmetric encryption, hashing, digital signatures, certificates, PKI, key exchange, random number generation.
- Scripting: shell, PowerShell, Python for parsing logs and automating checks.
- Cloud basics: shared responsibility, regions, accounts/subscriptions/projects, IAM, storage, KMS, logging, network security groups.

#### Practice

- Build a lab with one Linux VM, one Windows VM, and a simple network diagram.
- Harden SSH and remote access.
- Enable host firewalls and automatic updates.
- Review Linux and Windows logs.
- Explain DNS, TLS, OAuth/OIDC, and Kerberos on one page each.
- Explain basic PKI, certificate validation, and key exchange on one page.
- Build a simple asset inventory.

#### Deliverables

- Network diagram.
- Asset inventory.
- Identity model diagram.
- Glossary of core terms.
- PKI and certificate validation note.
- Short write-up: how a phishing email can become a ransomware incident.

#### Read / Watch / Courses

- Read: [Computer Networking: A Top-Down Approach](https://www.pearson.com/en-us/subject-catalog/p/computer-networking-a-top-down-approach/P200000013385/9780135415603) - canonical networking text for TCP/IP, DNS, HTTP, routing, and TLS context.
- Read: [How Linux Works, 3rd ed.](https://nostarch.com/howlinuxworks3) - practical bridge from Linux commands to OS internals, processes, filesystems, networking, and services.
- Read: [NIST SP 800-63-4 Digital Identity Guidelines](https://csrc.nist.gov/pubs/sp/800/63/4/final) - authoritative reference for identity proofing, MFA, authenticators, federation, and modern authentication assurance.
- Watch: [Professor Messer Network+ N10-009](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/) - widely used free video course for structured networking fundamentals.
- Course: [Linux Foundation LFS101 Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/) - free official Linux course for shell, processes, networking, files, users, and basic administration.
- Lab: [TryHackMe Pre Security](https://tryhackme.com/path/outline/presecurity) - guided browser labs for networking, Linux, Windows, web basics, and introductory security.

### Phase 2: Information Security, Governance, And Risk

Goal: learn how security becomes a managed business function.

#### Learn

- ISMS: ISO/IEC 27001 and ISO/IEC 27002.
- Risk management: ISO 31000, ISO/IEC 27005, NIST SP 800-30/37/39.
- FAIR: quantitative cyber risk thinking.
- Qualitative risk methods: heat maps, bow-tie analysis, risk workshops.
- Inherent vs residual risk.
- Risk treatment: avoid, mitigate, transfer, accept.
- Risk appetite, risk tolerance, risk ownership.
- Control types: preventive, detective, corrective, directive, deterrent, compensating.
- Due care, due diligence, professional ethics, organizational ethics, and conflicts of interest.
- Policy hierarchy: policy, standard, procedure, guideline, record.
- Three lines model: operational management, risk/compliance, internal audit.
- Security governance: CISO, CSO, DPO, säkerhetsskyddschef, system owner, risk owner, data owner, security architect, SOC, legal, procurement, HR, audit.
- Security committees, management review, board reporting.
- Compliance and audit: control design vs operating effectiveness, evidence collection, sampling, exceptions, remediation tracking.
- Security program management: scope, roadmap, budget, business case, resources, control implementation, control testing, communications, reporting.
- Supplier security: due diligence, contractual controls, right to audit, subcontractors, exit plans, concentration risk.
- Personnel security: screening, onboarding, role changes, offboarding, employment agreements, contractor controls, insider-risk indicators, HR/legal coordination.
- Security awareness and culture: role-based training, champions networks, phishing simulations done responsibly.
- Organizational culture: incentives, accountability, escalation norms, executive sponsorship, risk acceptance behavior.
- Metrics: KPIs, KRIs, KCIs, leading vs lagging indicators, avoiding vanity metrics.

#### Practice

- Draft an ISMS scope statement.
- Create a risk register with at least 10 risks.
- Map 10 ISO/IEC 27002 controls to evidence.
- Write a concise information security policy.
- Write an access control standard.
- Create a supplier due diligence checklist.
- Write a small security program charter with roles, resources, and reporting cadence.
- Build an awareness program plan with target groups, content cycle, and effectiveness measures.
- Create a personnel security checklist for onboarding, transfer, and offboarding.
- Write one executive risk memo.

#### Deliverables

- ISMS scope.
- Risk methodology.
- Risk register.
- Statement of Applicability draft.
- Security policy.
- Access control standard.
- Supplier security checklist.
- Security program charter.
- Awareness and training plan.
- Personnel security checklist.
- Management review agenda.

#### Read / Watch / Courses

- Read: [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) - clean organizing model for governance, risk, controls, communication, and improvement.
- Read: [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) and [ISO/IEC 27002:2022](https://www.iso.org/standard/75652.html) - global ISMS and control baseline for scope, risk treatment, SoA, management review, and control design.
- Read: [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) and [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) - classic risk assessment and risk management lifecycle references.
- Read: [Measuring and Managing Information Risk: A FAIR Approach](https://www.fairinstitute.org/fair-book) - canonical quantitative cyber-risk book for likelihood, loss magnitude, and business risk language.
- Watch: [NIST CSF 2.0 Videos](https://www.nist.gov/cyberframework/videos) - official explanation of the CSF 2.0 structure, including the Govern function.
- Course: [EU Academy ENISA Foundations of IT Security and Risk Management](https://academy.europa.eu/courses/foundations-of-it-security-and-risk-management-itsrm) - official EU risk-management course with assessment.
- Course: [MSB Operativ informationssäkerhetskurs](https://www.msb.se/sv/utbildning--ovning/alla-utbildningar/informationssakerhet---operativ-informationssakerhetskurs-en-introduktionskurs-till-informationssakerhet/) - Swedish authority course for practical information-security roles.

### Phase 3: Core Cyber Defense

Goal: understand the controls that prevent or reduce common cyber incidents.

#### Learn

- Secure configuration baselines: CIS Benchmarks, hardened OS images, secure-by-default templates.
- Configuration and change management: baselines, approved changes, emergency changes, drift detection, asset ownership, service dependencies.
- Vulnerability management: discovery, scanning, CVE, CVSS, EPSS, CISA KEV, compensating controls, patch SLAs.
- Endpoint security: EDR/XDR, application control, device encryption, local admin control, device posture.
- Network security: segmentation, micro-segmentation, ingress/egress filtering, DNS security, web proxying, NAC, ZTNA, SASE.
- Email security: anti-phishing, sandboxing, SPF, DKIM, DMARC, user reporting.
- Identity security: MFA, conditional access, PAM, JIT access, service accounts, workload identity, passkeys, break-glass accounts.
- Secrets management: vaults, KMS, secret rotation, no secrets in repositories.
- Logging and monitoring: log sources, time sync, SIEM, detection rules, dashboards, retention, alert quality.
- Backup and recovery: immutable backups, restore tests, RPO/RTO, ransomware recovery.
- Physical and environmental controls: restricted areas, visitor control, server rooms, wiring closets, media storage, power, UPS, HVAC, fire detection and suppression.
- Media and resource protection: removable media rules, secure storage, transport, sanitization, disposal, and chain of custody.
- Security operations: triage, escalation, runbooks, case management, post-incident improvement.

#### Practice

- Build a vulnerability management workflow.
- Scan a lab and prioritize remediation.
- Configure centralized logs from Linux and Windows.
- Create a simple change-management workflow for security-impacting changes.
- Review a small office or lab environment for physical and environmental controls.
- Write a credential-theft incident runbook.
- Run a backup restore test and document the restore time.
- Build a basic detection rule mapped to MITRE ATT&CK.

#### Deliverables

- Vulnerability management procedure.
- Hardening checklist.
- Logging source inventory.
- Backup and restore report.
- Identity security baseline.
- Change-management workflow.
- Physical and environmental controls checklist.
- Detection coverage map.

#### Read / Watch / Courses

- Read: [CIS Critical Security Controls v8.1](https://www.cisecurity.org/controls/v8-1) - prioritized defensive control set for inventory, hardening, access, logging, recovery, and response.
- Read: [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) - widely used secure configuration baselines for operating systems, cloud, network devices, and applications.
- Read: [NIST SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final) - strong enterprise patch and vulnerability-management reference.
- Read: [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) and [StopRansomware Guide](https://www.cisa.gov/sites/default/files/2025-03/StopRansomware-Guide%20508.pdf) - practical prioritization and ransomware prevention, detection, backup, and recovery guidance.
- Watch: [SANS Cyber Defense](https://www.youtube.com/@sanscyberdefense) - high-signal defensive security talks covering SOC work, hardening, endpoint, network, and detection.
- Lab: [TryHackMe SOC Level 1](https://tryhackme.com/r/path/outline/soclevel1) - structured hands-on SOC path for SIEM, endpoint, network attacks, and triage.
- Lab: [CyberDefenders Blue Team Labs](https://cyberdefenders.org/blue-team-labs/) - practical browser-based investigations for SOC, DFIR, threat hunting, and malware analysis.

### Phase 4: Cloud, Infrastructure, SaaS, And Platform Security

Goal: build judgement for modern infrastructure and shared-responsibility environments.

#### Learn

- Cloud shared responsibility.
- Landing zones and account/subscription/project structure.
- Cloud IAM: roles, policies, federation, service principals, workload identities, key rotation.
- Cloud networking: VPC/VNet, private endpoints, security groups, routing, WAF, DDoS protection.
- Cloud logging: control plane, data plane, identity, storage, network, SIEM integration.
- Encryption and key management: KMS, HSM, customer-managed keys, secret managers.
- Container security: minimal images, image signing, runtime controls, admission control.
- Kubernetes: RBAC, network policies, pod security, secrets, API server security, supply chain.
- Infrastructure as Code: Terraform/Bicep/Pulumi review, state protection, policy-as-code, drift detection.
- SaaS security: SSO, audit logs, sharing controls, tenant settings, SSPM, CASB.
- Cloud categories: CSPM, CWPP, CNAPP, CIEM.
- Sovereignty and jurisdiction: where data sits and who can access it.
- Zero Trust architecture: verify explicitly, least privilege, assume breach, continuous evaluation.

#### Practice

- Build a minimal secure cloud landing zone.
- Write cloud logging requirements.
- Review one Kubernetes deployment for security issues.
- Create a cloud incident runbook for exposed storage or compromised keys.
- Map cloud controls to CIS Controls and ISO/IEC 27001.

#### Deliverables

- Cloud reference architecture.
- IAM model.
- Cloud control checklist.
- Container/Kubernetes security checklist.
- Cloud incident runbook.

#### Read / Watch / Courses

- Read: [CSA Security Guidance for Critical Areas of Focus in Cloud Computing v5](https://cloudsecurityalliance.org/artifacts/security-guidance-v5) and [CSA Cloud Controls Matrix](https://cloudsecurityalliance.org/research/cloud-controls-matrix/) - vendor-neutral cloud security architecture, governance, and control mapping.
- Read: [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) - authoritative model for identity-centric and continuously evaluated access.
- Read: [Kubernetes Security Checklist](https://kubernetes.io/docs/concepts/security/security-checklist/) and [NSA/CISA Kubernetes Hardening Guidance](https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/2716980/nsa-cisa-release-kubernetes-hardening-guidance/) - practical Kubernetes baseline for clusters, workloads, RBAC, secrets, and networking.
- Read: [AWS Security Reference Architecture](https://aws.amazon.com/prescriptive-guidance/security-reference-architecture/), [Azure CAF Secure](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/secure/), and [Google Cloud Security Pillar](https://cloud.google.com/architecture/framework/security) - provider-native reference architectures for landing zones and shared responsibility.
- Watch: [AWS re:Inforce On Demand](https://aws.amazon.com/events/reinforce/on-demand/), [Mandiant and Google Cloud Security](https://www.youtube.com/@mandiant), and [CNCF YouTube](https://www.youtube.com/@cncf) - cloud, Kubernetes, IAM, detection, and platform-security sessions from primary channels.
- Course: [CSA Certificate of Cloud Security Knowledge](https://cloudsecurityalliance.org/education/ccsk) - vendor-neutral cloud security foundation aligned to CSA guidance.
- Lab: [Kubernetes Goat](https://madhuakula.com/kubernetes-goat/) - intentionally vulnerable Kubernetes lab for RBAC, secrets, network policy, and runtime issues.

### Phase 5: Secure Engineering, AppSec, DevSecOps, And Software Supply Chain

Goal: understand how to build security into systems before they go live.

#### Learn

- Secure SDLC: requirements, design, implementation, testing, deployment, maintenance.
- Threat modeling: STRIDE, PASTA, attack trees, abuse cases, LINDDUN for privacy.
- Secure architecture principles: least privilege, defense in depth, secure defaults, fail securely, separation of duties, economy of mechanism, complete mediation, zero trust, privacy by design.
- Architecture review: assets, trust boundaries, attack surfaces, data flows, identity flows, control placement, abuse cases, failure modes, operational ownership.
- Security models: Bell-LaPadula, Biba, Clark-Wilson, Brewer-Nash / Chinese Wall, state machine model, lattice-based access control.
- Web security: OWASP Top 10, authentication, authorization, access control, input validation, output encoding, CSRF, SSRF, file upload security.
- API security: object-level authorization, token handling, rate limiting, schemas, replay protection.
- Mobile security: OWASP MASVS, local storage, platform permissions, certificate validation, deep links.
- Secure coding: secrets handling, dependency safety, error handling, safe cryptography APIs.
- Cryptography engineering: algorithm selection, crypto lifecycle, key hierarchy, PKI, certificate lifecycle, key rotation, crypto agility, common implementation mistakes.
- Cryptanalytic and implementation attacks: brute force, known/chosen plaintext or ciphertext concepts, downgrade attacks, timing, side channel, fault injection, padding oracles, misuse of randomness.
- DevSecOps: SAST, DAST, IAST, SCA, container scanning, IaC scanning, secret scanning.
- Fuzzing: protocol parsers, file formats, APIs, native code.
- Software supply chain: dependency confusion, typosquatting, maintainer compromise, build isolation, artifact repositories.
- SBOM: CycloneDX, SPDX.
- Provenance and signing: SLSA, in-toto, Sigstore, Cosign.
- CI/CD security: runner isolation, least privilege, protected branches, artifact signing, environment separation.
- Acquired software and managed services: COTS, open source, SaaS, cloud services, third-party libraries, support obligations, escrow, exit and replacement risk.
- Vulnerability disclosure: security contact, intake, triage, CVE basics, advisories.

#### Practice

- Threat model a small web app.
- Run an architecture review for a small system and document trust boundaries.
- Run OWASP Juice Shop or another intentionally vulnerable lab.
- Add dependency scanning and secret scanning to a test repository.
- Write a cryptography decision record for authentication, encryption, signing, and key storage.
- Write a vulnerability disclosure policy.
- Build a secure CI/CD checklist.
- Map one software supply-chain incident to preventive controls.

#### Deliverables

- Data flow diagram.
- Threat model.
- Architecture review note.
- Cryptography decision record.
- Secure coding checklist.
- CI/CD security checklist.
- SBOM and dependency process.
- Vulnerability disclosure and patch process.

#### Read / Watch / Courses

- Read: [Security Engineering, 3rd ed.](https://www.cl.cam.ac.uk/archive/rja14/book.html) - Ross Anderson's open textbook on building dependable secure systems across software, hardware, operations, and organizations.
- Read: [Threat Modeling: Designing for Security](https://shostack.org/books/threat-modeling-book) - canonical practical treatment of STRIDE, design analysis, and threat-modeling workflow.
- Read: [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/), [OWASP Top 10](https://owasp.org/Top10/), [OWASP API Security](https://owasp.org/API-Security/), and [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) - standard AppSec requirements and testing references.
- Read: [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final), [SLSA](https://slsa.dev/), [CycloneDX](https://cyclonedx.org/specification/overview), and [SPDX](https://spdx.dev/use/specifications/) - core secure-development and software supply-chain references.
- Watch: [OWASP Foundation](https://www.youtube.com/@OWASPGLOBAL) and [OpenSSF](https://www.youtube.com/@OpenSSF) - broad AppSec, threat modeling, SBOM, Sigstore, SLSA, and open-source supply-chain material.
- Lab: [PortSwigger Web Security Academy](https://portswigger.net/web-security) - best free interactive web/API security lab set.
- Course: [Linux Foundation / OpenSSF Developing Secure Software LFD121](https://training.linuxfoundation.org/training/developing-secure-software-lfd121/) - free secure SDLC course covering requirements, design, coding, verification, and supply-chain basics.

### Phase 6: Data Security, Privacy, And Records

Goal: protect data according to value, sensitivity, lifecycle, and legal basis.

#### Learn

- Data lifecycle: collect, create, classify, use, share, store, archive, delete.
- Data classification: public, internal, confidential, restricted, personal data, special categories, security-classified information.
- Information and asset roles: owner, controller, custodian, processor, user, subject, system owner, data owner.
- Data inventory and mapping: systems, data stores, integrations, exports, logs, backups.
- Data states: in use, in transit, at rest, in backup, in archive, in logs, in test environments.
- Access control: RBAC, ABAC, row/column-level controls, privileged data access, JIT access.
- Encryption: at rest, in transit, key management, HSM/KMS, rotation, envelope encryption.
- Tokenization, pseudonymization, anonymization, masking, synthetic data.
- DLP and usage controls: endpoint, email, cloud storage, SaaS sharing, source code, AI prompts, DRM, CASB, watermarking.
- Retention and deletion: legal hold, archive, backup retention, data remanence, secure erasure, cryptographic erasure, destruction certificates.
- Asset and media handling: labeling, storage, transfer, transport, removable media, printouts, evidence media, disposal.
- End-of-life and end-of-support: data migration, decommissioning, archival access, unsupported systems, records obligations.
- GDPR principles: lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity/confidentiality, accountability.
- Controller, processor, sub-processor roles.
- DPIA methodology.
- ROPA: records of processing activities.
- International transfers: SCCs, adequacy, BCRs, transfer impact assessments, Schrems II implications.
- Data subject rights.
- DPO role and independence.
- PETs: differential privacy, homomorphic encryption, secure multi-party computation, federated learning, synthetic data.

#### Practice

- Create a data inventory and data flow map.
- Draft a data classification and handling standard.
- Draft media handling and secure destruction requirements.
- Perform a mock DPIA.
- Write a personal data breach decision tree.
- Map a cloud/SaaS data flow to GDPR roles and transfer mechanisms.
- Review one decommissioning scenario for retention, deletion, backups, and EOL/EOS risk.

#### Deliverables

- Data inventory.
- Data classification standard.
- Asset and media handling standard.
- DPIA template and mock DPIA.
- ROPA example.
- Breach notification checklist.
- Data retention and deletion schedule.
- Decommissioning and secure destruction checklist.

#### Read / Watch / Courses

- Read: [GDPR on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj) - primary source for data protection principles, controller/processor roles, DPIA, breach, transfers, and security of processing.
- Read: [NIST Privacy Framework](https://www.nist.gov/privacy-framework) - practical privacy risk-management model that complements security controls.
- Read: [Handbook on European Data Protection Law](https://fra.europa.eu/en/node/26914) - respected open EU, Council of Europe, and EDPS privacy-law handbook.
- Read: [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final) and [ISO 15489-1:2016](https://www.iso.org/standard/62542.html) - canonical references for media sanitization, disposal, and records management.
- Read: [IMY DPIA guidance](https://www.imy.se/publikationer/vagledning-vid-konsekvensbedomning/) and [IMY ROPA guidance](https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/fora-register-over-behandling/) - Swedish authority support for DPIA and processing records.
- Watch: [NIST Privacy Framework: At a Glance](https://www.nist.gov/video/privacy-framework-glance) and [EDPB GDPR video](https://www.edpb.europa.eu/news/news/2019/edpb-video_en) - concise official privacy and GDPR overviews.
- Course: [IAPP CIPM](https://iapp.org/train/cipm-training/) and [IAPP CIPT](https://iapp.org/train/cipt-training) - privacy program and privacy technology training for data inventory, DPIA, retention, breach, and privacy engineering.

### Phase 7: Detection, Incident Response, Forensics, Threat Intelligence, And Resilience

Goal: detect, investigate, communicate, contain, recover, continue critical operations, and improve.

#### Learn

- Incident lifecycle: prepare, detect, analyze, contain, eradicate, recover, improve.
- Incident classification and categorization: severity, business impact, affected data, legal/regulatory triggers, escalation route.
- NIST SP 800-61r3 and NIST CSF 2.0 alignment.
- Alert triage: severity, confidence, affected assets, evidence, scope, false positives.
- Forensics basics: order of volatility, chain of custody, memory and disk imaging, timeline analysis, log preservation.
- Investigation types: administrative, HR, civil, criminal, regulatory, contractual, insurance, and industry-standard investigations.
- Legal handling: legal hold, privilege, regulator notification, law enforcement contact, evidence admissibility, documentation quality.
- Malware and ransomware: initial access, lateral movement, exfiltration, encryption, extortion, recovery.
- Threat intelligence: strategic, operational, tactical, technical.
- IoCs vs TTPs.
- MITRE ATT&CK, Diamond Model, Cyber Kill Chain.
- TLP, STIX/TAXII, ISACs, CERTs.
- Threat hunting: hypotheses, data sources, ATT&CK mapping.
- Business impact analysis: critical services, maximum tolerable downtime, RTO, RPO, dependencies, workarounds.
- Business continuity and disaster recovery: BCP, DRP, crisis management, recovery sites, alternate processing, manual fallback, supplier dependencies.
- Resilience testing: tabletop, walkthrough, simulation, parallel test, partial interruption, full interruption where appropriate.
- Crisis communication: legal, executive, customer, regulator, media, employee communication.
- Post-incident review: root cause, control failures, lessons, tracked remediation.

#### Practice

- Run a ransomware tabletop exercise.
- Run a BIA workshop for a critical service.
- Draft a BCP/DRP outline with RTO/RPO, dependencies, and exercise plan.
- Write an incident report.
- Build one Sigma-style detection rule.
- Map detection coverage to MITRE ATT&CK.
- Draft a communications plan for a major cyber incident.
- Create an investigation and evidence handling checklist.

#### Deliverables

- Incident response plan.
- Incident classification matrix.
- Ransomware playbook.
- Cloud credential compromise playbook.
- BIA and service dependency map.
- BCP/DRP outline.
- DR exercise plan.
- Investigation and evidence handling checklist.
- Threat intelligence requirements.
- Detection coverage map.
- Post-incident report template.

#### Read / Watch / Courses

- Read: [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) - current authoritative incident response guide aligned to NIST CSF 2.0.
- Read: [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final) - practical forensic process reference for incident responders.
- Read: [MITRE ATT&CK](https://attack.mitre.org/), [MITRE ATT&CK Detection Engineering Training](https://attack.mitre.org/resources/learn-more-about-attack/training/detection-engineering/), and [FIRST TLP 2.0](https://www.first.org/tlp/) - standard language for adversary behavior, detections, and threat-intel sharing.
- Read: [NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) and [ISO 22301:2019](https://www.iso.org/standard/75106.html) - contingency planning, BIA, recovery, and business continuity references.
- Watch: [SANS DFIR](https://www.youtube.com/@SANSForensics) and [SANS STAR Live](https://www.sans.org/mlp/star-webcast) - strong DFIR, ransomware, evidence handling, threat analysis, and hunting material.
- Lab: [CyberDefenders Tracks](https://cyberdefenders.org/tracks/) and [Splunk Boss of the SOC v3](https://www.splunk.com/en-us/blog/security/botsv3-dataset-released.html) - structured DFIR, threat hunting, malware, cloud-forensics, and SOC investigation practice.
- Course: [MSB continuity management course](https://www.msb.se/sv/utbildning--ovning/alla-utbildningar/webbutbildning-om-kontinuitetshantering/) and [BCI CBCI Certification Course](https://www.thebci.org/certification-training/business-continuity-certification-cbci.html) - practical continuity, BIA, BCP, resilience, and recovery planning.

### Phase 8: EU Regulation Stack

Goal: understand which EU rules drive security obligations and how they overlap.

Learn applicability, scope, obligations, authorities, reporting duties, evidence, sanctions, and supplier implications. Do not try to memorize every article.

#### GDPR: Regulation `(EU) 2016/679`

- Personal data processing.
- Controller, processor, sub-processor.
- Lawful basis, special categories, data subject rights.
- DPIA, ROPA, DPO.
- Personal data breach notification: normally 72 hours to supervisory authority when required.
- International transfers and Schrems II.
- Security of processing under Article 32.

#### NIS2: Directive `(EU) 2022/2555`

- Cybersecurity obligations for essential and important entities across 18 sectors.
- Management accountability and training.
- Risk-management measures.
- Incident reporting.
- Supply-chain security.
- Implemented in Sweden through Cybersäkerhetslag `(2025:1506)`.

#### DORA: Regulation `(EU) 2022/2554`

- Financial sector ICT risk management.
- ICT incident reporting.
- Digital operational resilience testing.
- Threat-led penetration testing for certain entities.
- ICT third-party risk.
- Oversight of critical ICT third-party providers.

#### CER: Directive `(EU) 2022/2557`

- Resilience of critical entities.
- Physical and organizational resilience sibling to NIS2.
- Covers hazards, terrorism, sabotage, insider threats, hybrid threats.

#### Cyber Resilience Act: Regulation `(EU) 2024/2847`

- Horizontal cybersecurity requirements for products with digital elements.
- Security-by-design, vulnerability handling, documentation, support periods, CE marking.
- Reporting obligations for actively exploited vulnerabilities and severe incidents apply from `2026-09-11`.
- General application from `2027-12-11`.

#### AI Act: Regulation `(EU) 2024/1689`

- Risk-based AI regulation.
- Prohibited practices and AI literacy obligations applied from `2025-02-02`.
- GPAI and governance provisions apply from `2025-08-02`.
- Most provisions apply from `2026-08-02`.
- Article 6(1) Annex I high-risk obligations apply from `2027-08-02`.
- Key concepts: prohibited AI, high-risk AI, transparency obligations, GPAI, systemic risk, conformity assessment, technical documentation, logging, human oversight, cybersecurity.

#### eIDAS 2.0: Regulation `(EU) 2024/1183`

- Electronic identification, trust services, EU Digital Identity Wallet.
- Relevant for identity, signatures, certificates, trust service providers, and cross-border digital identity.

#### Data Act And Data Governance Act

- Data sharing, IoT-generated data access, cloud switching, data intermediaries, data altruism.
- Relevant for IoT, cloud, SaaS, industrial data, and data portability.

#### EU Cybersecurity Act `(EU) 2019/881`

- ENISA mandate.
- European cybersecurity certification framework: EUCC, EUCS, and related schemes.

#### Cyber Solidarity Act

- Entered into force on `2025-02-04`.
- EU-level cyber preparedness, detection, response, Cybersecurity Alert System, and emergency mechanism.

#### ePrivacy

- Electronic communications confidentiality, cookies, tracking, traffic data.
- In Sweden, much of the practical context appears through LEK and PTS guidance.

#### Overlap Examples

- Bank: GDPR + DORA + NIS2/Cybersäkerhetslagen where applicable + ePrivacy/LEK + sector rules.
- Hospital: GDPR + NIS2 + CER + health-sector law + medical device regulation.
- Energy company: GDPR + NIS2 + CER + sector rules + often säkerhetsskydd.
- SaaS vendor of connected products: GDPR + CRA + customer-driven NIS2 requirements.
- AI-enabled connected device: GDPR + CRA + AI Act + RED/EN 18031 + sector-specific rules.

#### Practice

- Build an EU regulatory applicability matrix for a bank, hospital, energy company, SaaS provider, connected product manufacturer, and AI-enabled product.
- Compare incident reporting duties across GDPR, NIS2, DORA, CRA, and sector-specific rules for one scenario.
- Map one outsourced service to controller/processor roles, supplier obligations, incident reporting, evidence, and contractual security requirements.
- Create an obligation-to-evidence table for one EU regulation: scope trigger, required security measures, documentation, owner, authority, deadline, and supplier impact.
- Analyze one product or service where GDPR, CRA, AI Act, NIS2, and ePrivacy/LEK could overlap.
- Review one current EU guidance or authority page and update the applicability matrix with what changed.

#### Deliverables

- EU regulatory applicability matrix.
- Regulatory overlap map.
- NIS2/Cybersäkerhetslagen applicability memo.
- GDPR transfer assessment.
- CRA/AI Act/DORA relevance note.
- EU incident notification comparison table.
- Supplier obligation mapping.

#### Read / Watch / Courses

- Read: [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), [eIDAS 2.0](https://eur-lex.europa.eu/eli/reg/2024/1183/oj), [Data Act](https://eur-lex.europa.eu/eli/reg/2023/2854/oj), and [Data Governance Act](https://eur-lex.europa.eu/eli/reg/2022/868/oj) - primary EU texts for privacy, digital identity, data sharing, and data intermediaries.
- Read: [NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), [CER](https://eur-lex.europa.eu/eli/dir/2022/2557/oj), [DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj), and [EU Cybersecurity Act](https://eur-lex.europa.eu/eli/reg/2019/881/oj) - primary EU cyber, resilience, financial-sector, and certification texts.
- Read: [Cyber Resilience Act](https://eur-lex.europa.eu/eli/reg/2024/2847/oj), [AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), and [ePrivacy Directive](https://eur-lex.europa.eu/eli/dir/2002/58/oj) - primary product cybersecurity, AI governance, and communications privacy sources.
- Watch: [ENISA NIS2 awareness videos](https://tools.enisa.europa.eu/topics/cybersecurity-education/awareness-campaigns/network-and-information-systems-directive-2-nis2), [European Commission AI Act webinar](https://digital-strategy.ec.europa.eu/en/events/webinar-exploring-architecture-ai-act), and [Digital EU](https://www.youtube.com/@DigitalEU) - official EU explanations of the regulatory stack.
- Course: [EIPA Cybersecurity Policies, Legislation and Practices in the EU](https://www.eipa.eu/courses/cybersecurity-policies-and-practices-in-the-eu-full-course/) - EU policy course covering GDPR, NIS2, DORA, CRA, and cybersecurity practice.
- Course: [IAPP CIPP/E](https://iapp.org/train/cippe-training/), [IAPP AIGP](https://iapp.org/train/aigp-training/), and [EU-SDFA DORA course](https://eusdfa.eui.eu/course/dora/) - specialist training for European privacy, AI governance, and financial ICT resilience.

### Phase 9: Swedish Regulation And Authorities

Goal: understand the Swedish legal and authority landscape that shapes security work.

#### Cybersecurity

- Cybersäkerhetslag `(2025:1506)`: Sweden's NIS2 implementation, in force from `2026-01-15`.
- Cybersäkerhetsförordning `(2025:1507)`.
- MCF, Myndigheten för civilt försvar, formerly MSB from `2026-01-01`, is central in civil defence and cybersecurity coordination.
- Incident reporting under cybersäkerhetslagen: early warning as soon as possible and no later than 24 hours after discovery; incident notification within 72 hours; final report within one month. Trusted service providers can have stricter 24-hour duties.
- Sectoral supervisory authorities vary by sector.

#### Protective Security

- Säkerhetsskyddslag `(2018:585)`.
- Säkerhetsskyddsförordning `(2021:955)`.
- PMFS `2022:1`: Säkerhetspolisen's protective security regulations.
- Försvarsmakten föreskrifter and KSF where defence or classified systems are relevant.

#### Data Protection And Privacy

- Dataskyddslag `(2018:218)`: Swedish law supplementing GDPR.
- Brottsdatalagen: law-enforcement data processing.
- Kamerabevakningslagen `(2018:1200)`.
- Patientdatalagen `(2008:355)` for healthcare.
- IMY guidance and decisions.

#### Public Sector, Secrecy, And Records

- Offentlighets- och sekretesslagen `(2009:400)`: secrecy and confidentiality in the public sector.
- Tryckfrihetsförordningen and Yttrandefrihetsgrundlagen: public access to official documents and constitutional media freedoms.
- Arkivlagen `(1990:782)`: public records retention.
- Public procurement rules and supplier security.

#### Communications And Physical Protection

- Lagen om elektronisk kommunikation `(2022:482)`: electronic communications, integrity, security, cookies/ePrivacy context.
- Skyddslagen `(2010:305)`: protected sites and objects.
- Lagen om totalförsvarsplikt `(1994:1809)`: total defence duty and war placement context.
- FRA-lagen and related signals-intelligence legislation for context, not ordinary organizational compliance.

#### Criminal Law Context

- Brottsbalken chapter 4: computer intrusion and unlawful interception context.
- Brottsbalken chapter 9: computer fraud.
- Brottsbalken chapter 19: offences against Sweden's security, espionage, unauthorized intelligence activities.
- Brottsbalken chapter 20: misconduct by public officials.

#### Authorities To Know

- MCF: civil defence, resilience, cybersecurity coordination, CERT-SE context.
- CERT-SE: national CSIRT.
- NCSC Sweden: national cyber security centre.
- Säkerhetspolisen: protective security, counter-intelligence, annual threat reporting.
- Försvarsmakten and MUST: military security and defence-sector protective security.
- FRA: signals intelligence and national cryptologic/information assurance role.
- FMV and CSEC: defence procurement and Common Criteria certification scheme.
- IMY: data protection authority.
- PTS: electronic communications and trust services.
- Finansinspektionen: financial sector and DORA.
- Energimyndigheten, Socialstyrelsen, Transportstyrelsen, Livsmedelsverket and others: sector regulators depending on scope.
- Riksrevisionen: state audit, including IT/security in public agencies.
- MPF: psychological defence and influence operations context.

#### Practice

- Build a Swedish legal applicability memo for a municipality, healthcare region, telecom operator, SaaS provider, energy company, and defence supplier.
- Create a Swedish authority and reporting matrix covering MCF/CERT-SE, IMY, PTS, Finansinspektionen, sector authorities, Säkerhetspolisen, and Försvarsmakten where relevant.
- Trace one incident from discovery to reporting and communication under Cybersäkerhetslagen, GDPR/Dataskyddslag, LEK, OSL, and säkerhetsskydd where applicable.
- Compare binding law, förordning, föreskrift, authority guidance, standard, contract, and sector practice for one security decision.
- Assess one public-sector service for OSL, Arkivlagen, procurement, GDPR, and supplier security implications.
- Read one Swedish authority guidance document and extract obligations, recommended controls, evidence, and owner roles.

#### Deliverables

- Swedish legal applicability memo.
- Swedish authority and reporting matrix.
- Cybersäkerhetslagen incident notification timeline.
- Sectoral supervisory authority map.
- OSL, Arkivlagen, and LEK applicability note.
- Public procurement and supplier security note.
- Authority guidance source map.

#### Read / Watch / Courses

- Read: [Cybersäkerhetslag `(2025:1506)`](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/cybersakerhetslag-20251506_sfs-2025-1506/) and [Cybersäkerhetsförordning `(2025:1507)`](https://svenskforfattningssamling.se/doc/20251507.html) - primary Swedish NIS2 implementation texts.
- Read: [MSB/MCF metodstöd for systematic information security work](https://metodstod-informationssakerhet.msb.se/sv/) - practical Swedish authority guide for risk, gap analysis, controls, and systematic security work.
- Read: [IMY data protection guidance](https://www.imy.se/verksamhet/dataskydd/), [PTS security guidance](https://pts.se/sakerhet-och-integritet/vagledning-om-sakerhet-till-organisationer/), [OSL](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/offentlighets--och-sekretesslag-2009400_sfs-2009-400/), [Arkivlagen](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/arkivlag-1990782_sfs-1990-782/), and [LEK](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2022482-om-elektronisk-kommunikation_sfs-2022-482/) - privacy, communications, secrecy, and records sources.
- Watch: [MCF webinars on NIS2](https://www.mcf.se/sv/amnesomraden/informationssakerhet-och-cybersakerhet/krav-och-regler-inom-informationssakerhet-och-cybersakerhet/nis-direktivet/nis2/webbinarier-om-nis2/), [MCF Informationssäkerhet i fokus](https://www.mcf.se/sv/amnesomraden/informationssakerhet-och-cybersakerhet/kurser-och-natverk-inom-informationssakerhet/webbinarier/), and [IMY utbildningar och konferenser](https://www.imy.se/verksamhet/utbildning-och-stod/utbildningar-och-konferenser/) - official Swedish webinars and authority training.
- Course: [MSB/MCF courses in information security](https://www.mcf.se/sv/amnesomraden/informationssakerhet-och-cybersakerhet/kurser-och-natverk-inom-informationssakerhet/kurser-inom-informationssakerhet/) and [MSB DISA](https://www.msb.se/sv/utbildning--ovning/alla-utbildningar/datorstodd-informationssakerhetsutbildning-for-anvandare-disa/) - Swedish authority course hub and workplace awareness course.
- Course: [IFI NIS2 / Cybersäkerhetslagen](https://ifi.se/utbildning/nis2-cybersakerhetslagen-praktisk-tillampning-och-implementering/) and [BG Institute Cybersäkerhetslagen / NIS2](https://www.bginstitute.se/utbildning/cybersakerhetslagen-nu-genomfors-nis-2-i-svensk-ratt/) - practical Swedish implementation and legal training.

### Phase 10: Säkerhetsskydd In Depth

Goal: understand Sweden's protective security regime as its own discipline, not as ordinary cybersecurity.

#### Core Concept

Säkerhetsskydd protects:

- Security-sensitive activities.
- Security-classified information.
- Objects, systems, facilities, and persons relevant to Sweden's security.
- Sweden's binding international protective-security obligations.

The trigger is not personal data or commercial harm. The trigger is relevance to Sweden's security or binding international obligations.

#### Säkerhetsskyddsanalys

The cornerstone document. It identifies:

- What in the operation is security-sensitive.
- What security-classified information exists.
- Threats and vulnerabilities.
- Consequences for Sweden's security.
- Required protective security measures.
- Supplier and outsourcing exposure.
- Personnel roles and security class placement.

It should be updated regularly and when operations change materially.

#### Säkerhetsskyddsklassificering

Four levels:

1. Kvalificerat hemlig: exceptionally serious damage.
2. Hemlig: serious damage.
3. Konfidentiell: not insignificant damage.
4. Begränsat hemlig: minor damage.

This is distinct from OSL secrecy categories. Both regimes can apply.

#### Protective Security Measures

- Information security: handling, storage, transmission, crypto, access, system security.
- Physical security: areas, locks, guards, intrusion detection, zoning, facility controls.
- Personnel security: security vetting, register checks, training, ongoing suitability.

#### Personnel Security

- Säkerhetsprövning is continuous, not only at hiring.
- Security classes 1, 2, and 3 determine register check depth.
- Class 1 and 2 can involve special personal investigation.
- Follow-up conversations and changed-circumstance reporting matter.

#### Säkerhetsskyddsavtal

Required when a supplier or partner may access security-sensitive activity or security-classified information.

Know:

- SUA levels and access depth.
- Flow-down requirements to subcontractors.
- Supplier facility and personnel requirements.
- Audit rights.
- Handling of incidents and changes.

#### Transfers, Outsourcing, And M&A

Certain transfers, outsourcing, and cooperation involving security-sensitive activity require consultation with the supervisory authority and may be stopped.

#### Practice

- Perform a mock säkerhetsskyddsanalys for a fictional security-sensitive operation.
- Identify security-sensitive activity, security-classified information, consequences for Sweden's security, threats, vulnerabilities, and required protective measures.
- Classify example information into kvalificerat hemlig, hemlig, konfidentiell, begränsat hemlig, ordinary confidentiality, or not security-classified.
- Decide when a säkerhetsskyddsavtal is required for suppliers, subcontractors, consultants, cloud services, and outsourcing.
- Analyze one outsourcing, M&A, or cooperation scenario for consultation requirements, supplier exposure, foreign ownership/control, and residual risk.
- Build a practical handling flow for security-classified information: marking, storage, access, transmission, copying, destruction, and incident escalation.

#### Deliverables

- Säkerhetsskyddsanalys template.
- Security-classified information handling procedure.
- Security vetting process.
- Supplier/SUA decision checklist.
- Facility and access checklist.
- Security-sensitive outsourcing decision memo.

#### Read / Watch / Courses

- Read: [Säkerhetsskyddslag `(2018:585)`](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sakerhetsskyddslag-2018585_sfs-2018-585/) and [Säkerhetsskyddsförordning `(2021:955)`](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sakerhetsskyddsforordning-2021955_sfs-2021-955/) - binding legal foundation for Swedish protective security.
- Read: [Säpo säkerhetsskyddsanalys](https://www.sakerhetspolisen.se/sakerhetsskydd/sakerhetsskyddsanalys.html) and [Säpo vägledningar säkerhetsskydd](https://www.sakerhetspolisen.se/sakerhetsskydd/vagledningar-sakerhetsskydd.html) - official guidance for the cornerstone analysis, classification, personnel security, and suppliers.
- Read: [PMFS 2022:1](https://sakerhetspolisen.se/download/18.650ed51617f9c29b5522c6/1649764927944/Sakerhetspolisens_foreskrifter_om_sakerhetsskydd_PMFS_2022_1.pdf), [Säpo PMFS 2022:1 revision notice](https://sakerhetspolisen.se/sakerhetsskydd/aktuellt-inom-sakerhetsskydd/sakerhetspolisen-reviderar-sina-foreskrifter-om-sakerhetsskydd-pmfs-20221.html), and [Försvarsmakten FFS 2025:3](https://www.forsvarsmakten.se/globalassets/02-om-forsvarsmakten/myndighetsinformation/dokument/lagrum/gallande-ffs-2014-/ffs-2025.3-om-sakerhetsskydd.pdf) - regulatory detail, including defence-sector rules and amendments.
- Watch: [Säkerhetspolisen informationsfilmer säkerhetsskydd](https://www.sakerhetspolisen.se/sakerhetsskydd/informationsfilmer-sakerhetsskydd.html) - official films on säkerhetsskyddsanalys, protective measures, dimensioning, physical security, and classified information.
- Course: [FHS Introduktion till säkerhetsskydd](https://www.fhs.se/utbildningar/introduktion-till-sakerhetsskydd.html) and [FHS Säkerhetsskydd - grundkurs digital](https://www.fhs.se/utbildningar/sakerhetsskydd---grundkurs-digital.html) - authoritative Swedish Defence University baseline courses.
- Course: [FHS Säkerhetsskyddsanalys](https://www.fhs.se/utbildningar/sakerhetsskyddsanalys---planera-leda-och-vidmakthalla.html), [FHS Säkerhetsskyddschef steg I](https://www.fhs.se/utbildningar/sakerhetsskyddschef---steg-i.html), and [MSB grundläggande säkerhetsskydd webbutbildning](https://www.msb.se/sv/utbildning--ovning/alla-utbildningar/ny-sidagrundlaggande-sakerhetsskyddsutbildning-via-webben/) - role-oriented training for analysis, governance, and implementation.

### Phase 11: Offensive Security And Assurance

Goal: understand attacker methods enough to test and improve defenses legally and safely.

#### Learn

- Legal authorization, written scope, rules of engagement.
- Vulnerability assessment vs penetration test vs red team vs purple team.
- Assessment strategy: internal, external, third-party, hybrid, cloud, product, process, and control testing scopes.
- Control testing methods: design effectiveness, operating effectiveness, sampling, log review, configuration review, interviews, evidence review.
- Reconnaissance, enumeration, exploitation basics, privilege escalation, lateral movement.
- Web, API, cloud, AD, wireless, and social engineering testing boundaries.
- PTES, OSSTMM, OWASP testing guidance.
- Adversary emulation and MITRE ATT&CK.
- Breach and attack simulation, purple-team validation, synthetic transactions, coverage analysis, and misuse-case testing.
- TIBER-EU for threat-led red teaming in finance.
- Reporting: executive summary, evidence, reproducibility, severity, business impact, remediation.
- Exceptions and risk acceptance: compensating controls, expiry dates, ownership, residual risk, remediation tracking.

#### Practice

- Use only controlled labs or authorized scopes.
- Write a professional report for a lab target.
- Convert findings into defensive detections and hardening actions.
- Draft rules of engagement.
- Build a control test plan for one ISO/NIST/CIS control family.
- Write one exception request with residual risk, compensating controls, owner, and expiry date.

#### Deliverables

- Rules of engagement template.
- Test plan.
- Control test plan.
- Finding template.
- Exception and risk-acceptance template.
- Remediation tracking sheet.
- Purple-team exercise report.

#### Read / Watch / Courses

- Read: [NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final) and [PTES](http://www.pentest-standard.org/index.php/Main_Page) - methodology anchors for security assessment planning, execution, evidence, and reporting.
- Read: [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) - canonical web and API testing guide for authorized application security assurance.
- Read: [MITRE ATT&CK adversary emulation plans](https://attack.mitre.org/resources/adversary-emulation-plans/) and [ECB TIBER-EU](https://www.ecb.europa.eu/paym/cyber-resilience/tiber-eu/html/index.en.html) - authoritative material for purple-team validation and European threat-led ethical red teaming.
- Watch: [Black Hat](https://www.youtube.com/@BlackHatOfficialYT), [DEF CON Conference](https://www.youtube.com/user/DEFCONConference), [MITRE ATT&CK Fundamentals Training](https://attack.mitre.org/resources/learn-more-about-attack/training/attack-fundamentals/), and [OWASP Foundation](https://www.youtube.com/@OWASPGLOBAL) - high-signal offensive research, adversary emulation, and testing talks.
- Lab: [PortSwigger Web Security Academy](https://portswigger.net/web-security), [Hack The Box Academy Penetration Tester](https://academy.hackthebox.com/path/preview/penetration-tester), and [TryHackMe Jr Penetration Tester](https://tryhackme.com/r/path/outline/jrpenetrationtester) - safe hands-on practice for web, network, privilege escalation, and reporting.
- Course: [OffSec PEN-200 / OSCP](https://www.offsec.com/courses/pen-200/), [SANS SEC560](https://www.sans.org/cyber-security-courses/enterprise-penetration-testing), and [SANS SEC542](https://www.sans.org/cyber-security-courses/web-app-penetration-testing-ethical-hacking) - widely recognized professional training for enterprise and web application testing.

### Phase 12: Leadership, Strategy, And Soft Skills

Goal: turn technical and legal knowledge into organizational impact.

#### Security Strategy

- One-year and three-year security strategy.
- Roadmap design.
- Budgeting and prioritization.
- Business cases for security investments.
- Resource planning: people, tools, services, suppliers, training, and operating capacity.
- Risk reduction vs compliance vs resilience vs business enablement.
- Security operating model: centralized, federated, embedded, champions networks.
- Maturity models and improvement planning.
- Integration with enterprise governance, portfolio management, procurement, legal, HR, IT operations, product development, and audit.
- Monitoring external change: threat landscape, technology change, regulatory change, business change, supplier change.

#### Reporting And Metrics

- Board-level cyber risk reporting.
- Executive one-page memos.
- Risk in business language.
- Metrics: coverage, control effectiveness, incident trends, patch SLAs, audit findings, training outcomes.
- Program communications: stakeholder maps, reporting cadence, decisions needed, escalations, and narrative for risk acceptance.
- Avoid vanity metrics.

#### Soft Skills

- Writing for executives: concise, concrete, decision-oriented.
- Writing for engineers: specific, actionable, testable standards.
- Facilitating risk workshops and threat modeling sessions.
- Negotiating with vendors, auditors, engineers, and business owners.
- Teaching and awareness.
- Legal fluency: ability to read laws, contracts, and regulator guidance.
- Bilingual capability in Sweden: Swedish for laws and authority guidance, English for standards and global threat intelligence.
- Operating under stress during incidents and crises.
- Maintaining professional judgment: ethics, independence, transparency about uncertainty, and escalation when risk is being hidden.

#### Practice

- Write a one-page executive risk memo with situation, options, recommendation, decision needed, and next step.
- Translate one technical finding into board-level risk language with business impact, uncertainty, options, and tradeoffs.
- Facilitate a mock risk or threat-modeling workshop and capture owners, decisions, deferred items, and follow-up actions.
- Build a business case for one security investment with cost, benefit, risk reduction, operational impact, and implementation dependencies.
- Present a metrics dashboard and explain which decisions the metrics support.
- Draft a crisis communication note for a major incident, including what is known, what is uncertain, what is being done, and who needs to decide.
- Negotiate a realistic remediation or supplier requirement tradeoff and document the accepted risk or revised plan.

#### Deliverables

- Security strategy.
- Business case for one security investment.
- Security operating model.
- Board report.
- Metrics dashboard.
- Stakeholder communication plan.
- Annual assurance plan.
- Crisis communication plan.

#### Read / Watch / Courses

- Read: [ISO/IEC 27014:2020](https://www.iso.org/standard/74046.html) - governance-of-information-security standard for leadership, direction, monitoring, and accountability.
- Read: [NISTIR 8286](https://www.nist.gov/publications/integrating-cybersecurity-and-enterprise-risk-management-erm-0), [NIST CSF 2.0](https://www.nist.gov/cyberframework), and [ENISA ECSF](https://www.enisa.europa.eu/topics/skills-and-competences/skills-development/european-cybersecurity-skills-framework-ecsf) - practical bridge between cyber strategy, enterprise risk, roles, skills, and operating models.
- Read: [NACD Director's Handbook on Cyber-Risk Oversight](https://www.nacdonline.org/globalassets/public-pdfs/nacd_cyber-risk-oversight-handbook_pages_web-compressed.pdf), [WEF Principles for Board Governance of Cyber Risk](https://www.weforum.org/publications/principles-for-board-governance-of-cyber-risk/), and [UK NCSC Board Toolkit](https://www.ncsc.gov.uk/collection/board-toolkit) - board-level cyber-risk oversight and reporting guidance.
- Read: [How to Measure Anything in Cybersecurity Risk](https://books.google.com/books/about/How_to_Measure_Anything_in_Cybersecurity.html?id=AwD0BgAAQBAJ) - strong reference for metrics, uncertainty, business cases, and investment decisions.
- Watch: [CISA Live](https://www.cisa.gov/cisa-live), [NACD Director's Handbook on Cyber-Risk Oversight](https://www.nacdonline.org/all-governance/governance-resources/governance-research/director-handbooks/2026-cyber-risk-oversight/), and [FAIR Institute board cyber-risk oversight](https://www.fairinstitute.org/blog/video-how-boards-exercise-proper-cyber-risk-oversight-tips-for-directors-at-the-2020-fair-conference) - executive-facing material on cyber resilience, risk oversight, and board communication.
- Course: [Microsoft CISO Workshop](https://learn.microsoft.com/en-gb/security/adoption/ciso-workshop), [SANS LDR512](https://www.sans.org/cyber-security-courses/security-leadership-essentials-managers/), and [SANS LDR514](https://www.sans.org/cyber-security-courses/strategic-security-planning-policy-leadership) - structured leadership, strategy, maturity, metrics, policy, and operating-model training.
- Course: [ISACA CISM online review courses](https://www.isaca.org/training-and-events/online-training/online-review-courses) and [Cybersecurity for Business Specialization](https://www.coursera.org/specializations/cyber-security-business) - management-oriented material for governance, risk, security program leadership, and executive translation.

## 3. Specializations

Specializations are deeper tracks built on the Core Curriculum. Each track is split into chapters so you can study it incrementally instead of treating the whole domain as one large block.

Each specialization chapter follows the same structure:

- Learn: concepts, standards, technologies, and judgement areas.
- Practice: labs, exercises, reviews, and scenario work.
- Deliverables: concrete evidence you can produce.
- Read / Watch / Courses: source material and training routes.

### Track A.1: Embedded R&D Foundations And Threat Model

Goal: understand why embedded security differs from normal IT, cloud, and application security.

#### Learn

- Physical-adversary assumptions: bought devices, opened enclosures, exposed debug pads, firmware extraction, probing, glitching, and reverse engineering.
- Embedded constraints: RAM, CPU, battery, bandwidth, timing, storage, bill-of-materials cost, and field-service limitations.
- Long product lifecycles and crypto-agility needs for 10-25 year products.
- Safety, real-time, and mixed-criticality constraints: when a security control can break determinism, safety cases, or certification claims.
- Lifecycle phases: concept, development, manufacturing, provisioning, deployment, maintenance, vulnerability handling, and decommissioning.
- Manufacturing risk: factory access, test firmware, debug unlock paths, per-device secrets, certificates, HSM-backed provisioning, and production audit logs.

#### Practice

- Threat model a small connected embedded product across development, manufacturing, field operation, and end of life.
- Identify assets, trust boundaries, attackers, debug paths, update paths, secrets, and safety-relevant failure modes.
- Compare two mitigation choices where cost, battery, timing, or RAM constraints change the decision.
- Review one product teardown or firmware-analysis report and extract the embedded-specific lessons.

#### Deliverables

- Embedded product threat model.
- Lifecycle security responsibility matrix.
- Physical attacker assumptions note.
- Manufacturing and provisioning risk checklist.
- Embedded security requirements baseline.

#### Read / Watch / Courses

- Book: The Hardware Hacking Handbook.
- Book: Practical IoT Hacking.
- Standards: IEC 62443-4-1 and IEC 62443-4-2 for secure product development and component requirements.
- Reference: Trusted Computing Group DICE and TPM 2.0 material for device identity patterns.
- Course/lab: ChipWhisperer introductory labs for physical attack intuition.

### Track A.2: Hardware Roots Of Trust, Secure Boot, And Provisioning

Goal: design a trustworthy boot and identity chain from silicon to fleet operation.

#### Learn

- Roots of trust: TPM 2.0, fTPM, secure elements, MCU/SoC HSMs, hardware unique keys, PUFs, OTP memory, fuses, lifecycle states, and TRNGs.
- Secure elements and HSM examples: Microchip ATECC608, NXP SE050/EdgeLock, Infineon OPTIGA, NXP S32 HSE, Infineon AURIX HSM, Renesas ICU-S.
- Secure boot patterns: boot ROM, verified boot, measured boot, authenticated boot, encrypted boot, rollback protection, and recovery modes.
- Named flows worth recognizing: MCUboot, Trusted Firmware-M, U-Boot verified boot, UEFI Secure Boot, Android Verified Boot, ESP32 Secure Boot v2, NXP HAB/AHAB, Nordic secure boot.
- Update frameworks and manifest models: TUF, Uptane, SUIT, signed manifests, A/B partitions, atomic updates, staged rollout, and key rotation.
- Provisioning and onboarding: per-device keys, EST, BRSKI, FIDO Device Onboard, audit logs, certificate issuance, revocation, and field enrollment.

#### Practice

- Build or inspect a signed firmware update flow for an MCU or embedded Linux target.
- Draw the trust chain from boot ROM to application to update service.
- Write an anti-rollback and recovery strategy for failed updates.
- Review a provisioning flow and identify where secrets can leak or be cloned.

#### Deliverables

- Secure boot and update design.
- Firmware signing key hierarchy.
- Provisioning sequence diagram.
- Debug and lifecycle lock-down checklist.
- Key compromise and fleet recovery playbook.

#### Read / Watch / Courses

- MCUboot documentation.
- Trusted Firmware-M documentation.
- U-Boot verified boot documentation.
- RFC 9124 SUIT manifest, RFC 8995 BRSKI, RFC 7030 EST, RFC 9334 RATS.
- Vendor security manuals for one target MCU or SoC family.

### Track A.3: Embedded OS, Isolation, Communications, And Crypto

Goal: secure the runtime, communication channels, and cryptographic choices for constrained and Linux-class devices.

#### Learn

- RTOS and embedded OS choices: FreeRTOS, Zephyr, ThreadX, VxWorks, QNX, Integrity, PikeOS, RTEMS, NuttX.
- Embedded Linux hardening: Yocto/OpenEmbedded, Buildroot, read-only root filesystems, dm-verity, IMA/EVM, SELinux/AppArmor, seccomp, namespaces, capabilities.
- Isolation primitives: MPU, MMU, IOMMU/SMMU, TrustZone-A, TrustZone-M, OP-TEE, TF-M, hypervisors, separation kernels, and mixed-criticality partitioning.
- Local and field interfaces: UART, SPI, I2C, CAN, LIN, BLE, Wi-Fi, cellular, LoRaWAN, Modbus, DNP3, OPC UA, PROFINET, EtherCAT.
- Embedded crypto: AES-GCM/CCM, ChaCha20-Poly1305, SHA-2/SHA-3, Ed25519, X25519, ECDSA P-256, HKDF, HMAC, PSA Crypto API, mbedTLS, wolfSSL.
- Constrained communication security: TLS 1.3, DTLS 1.3, OSCORE, EDHOC, PSK tradeoffs, certificate validation, replay protection, and downgrade resistance.
- PQC planning for long-lived products: ML-KEM, ML-DSA, SLH-DSA, LMS/XMSS, hybrid schemes, firmware-signature size, RAM, and verification cost.

#### Practice

- Harden a minimal embedded Linux image and document what remains writable and executable.
- Compare TLS, DTLS, OSCORE, and EDHOC for one constrained device scenario.
- Review a crypto API use and identify key storage, randomness, nonce, and error-handling risks.
- Build a simple communication threat model for a device, gateway, and cloud service.

#### Deliverables

- Runtime isolation design.
- Embedded Linux hardening checklist.
- Communication security decision record.
- Crypto-agility and PQC migration note.
- Interface exposure inventory.

#### Read / Watch / Courses

- Zephyr security documentation.
- Yocto Project security and reproducible-build guidance.
- RFC 9147 DTLS 1.3, RFC 8613 OSCORE, RFC 9528 EDHOC.
- PSA Crypto API documentation.
- NIST FIPS 203, 204, 205 and NIST SP 800-208 for PQC and hash-based signatures.

### Track A.4: Embedded Assurance, Physical Attacks, And Field Lifecycle

Goal: verify embedded security and prepare for field failures, vulnerability handling, and end-of-support risk.

#### Learn

- Memory-safety risks in C/C++: buffer overflow, use-after-free, integer overflow, format strings, races, uninitialized memory, TOCTOU.
- Secure coding standards and hardening: MISRA C/C++, CERT C/C++, AUTOSAR C++14, stack protector, FORTIFY, NX/W^X, ASLR where possible, CFI, PAC, MTE.
- Analysis and testing: static analysis, fuzzing, HIL testing, negative tests, update interruption, downgrade attempts, lifecycle-transition tests.
- Physical attacks: side channels, timing, power analysis, EM analysis, cache channels, voltage glitching, clock glitching, EMFI, laser fault injection.
- Tool families: ChipWhisperer, oscilloscopes, EM probes, logic analyzers, JTAGulator, Bus Pirate, Saleae, Ghidra, IDA, Binary Ninja, binwalk, QEMU, Renode.
- Vulnerability operations: coordinated disclosure, SBOM, dependency monitoring, field telemetry, support lifetime, end-of-life notification.

#### Practice

- Run a firmware extraction or static firmware-analysis exercise on a benign sample.
- Fuzz one parser, protocol handler, or update component.
- Create tests for update interruption, rollback, corrupted manifests, and debug interface access.
- Write a disclosure and end-of-support plan for a long-lived product.

#### Deliverables

- Firmware analysis report.
- Embedded assurance test plan.
- Physical attack risk assessment.
- Vulnerability handling process for embedded products.
- End-of-support and decommissioning plan.

#### Read / Watch / Courses

- SEI CERT C and CERT C++ Coding Standards.
- Ghidra, binwalk, Renode, and ChipWhisperer tutorials.
- Hardwear.io and DEF CON Hardware Hacking Village talks.
- PSA Certified and SESIP overview material.
- Book: Embedded Software Development for Safety-Critical Systems.

### Track B.1: AI Governance, Inventory, And Risk Model

Goal: know what AI systems exist, what they do, who owns them, and which legal/security obligations apply.

#### Learn

- AI system inventory fields: use case, owner, model provider, model version, base model, fine-tuning data, RAG corpus, prompts, tools, guardrails, monitoring, logging, retention, and human oversight.
- AI supply chain: base model, model host, fine-tuning data, embeddings, vector database, prompt templates, tools, plugins, MCP servers, agents, framework, runtime, and cloud platform.
- AI-specific risk: probabilistic behavior, non-determinism, emergent capability, data as program, model as egress channel, training-data memorization, and autonomy compounding errors.
- Governance frameworks: NIST AI RMF, ISO/IEC 42001, ISO/IEC 23894, MITRE ATLAS, OWASP LLM and Agentic guidance.
- Legal context: GDPR, DPIA, automated decision-making, EU AI Act risk classification, transparency, logging, human oversight, and cybersecurity expectations.
- Swedish ecosystem context: AI Sweden, RISE, WASP, universities, banks, telecom, automotive, defence, health, and public-sector AI use.

#### Practice

- Inventory five AI use cases in a real or hypothetical organization.
- Classify each by business criticality, data sensitivity, autonomy, user exposure, and legal risk.
- Map one use case to NIST AI RMF categories and EU AI Act questions.
- Write a short AI acceptable-use policy for employees and developers.

#### Deliverables

- AI system inventory.
- AI risk classification memo.
- AI acceptable-use policy.
- AI governance RACI.
- DPIA trigger checklist for AI systems.

#### Read / Watch / Courses

- NIST AI RMF 1.0 and NIST Generative AI Profile.
- ISO/IEC 42001 and ISO/IEC 23894 overviews.
- EU AI Act official text and European Commission summaries.
- MITRE ATLAS.
- Course: DeepLearning.AI AI governance and responsible AI material.

### Track B.2: LLM, RAG, And Application Security

Goal: secure LLM applications where prompts, retrieval, users, data, and application logic interact.

#### Learn

- LLM application threats: direct prompt injection, indirect prompt injection, jailbreaks, prompt extraction, sensitive disclosure, insecure output handling, hallucination risk, denial-of-wallet, and token exhaustion.
- RAG threats: malicious documents, embedding poisoning, authorization bypass in retrieval, cross-tenant leakage, stale or over-retained data, re-ranker manipulation, and PII in embeddings.
- Control principles: model output is untrusted input, enforce authorization in code, do not place secrets in prompts, validate structured output, separate trusted and untrusted content, and preserve source provenance.
- Guardrails and validation: schema validation, allowlisted actions, output encoding, content filters, retrieval filters, source labels, budget controls, rate limits, and abuse monitoring.
- Logging tradeoffs: prompt/version, retrieved chunks, model version, tool calls, decision points, privacy controls, and retention.
- Data protection: lawful basis, purpose separation, training versus inference, embeddings as personal data when derived from personal data, and deletion strategy limitations.

#### Practice

- Build a toy RAG system and attack it with malicious retrieved content.
- Implement per-user authorization in retrieval and verify cross-tenant isolation.
- Test prompt injection, prompt extraction, and unsafe output handling.
- Add structured-output validation and logging that avoids leaking secrets or unnecessary personal data.

#### Deliverables

- LLM/RAG threat model.
- RAG authorization and data-flow diagram.
- Prompt and response logging decision record.
- RAG security checklist.
- LLM application abuse test report.

#### Read / Watch / Courses

- OWASP Top 10 for LLM Applications.
- OWASP Agentic AI threats and mitigations.
- Microsoft AI red-team and PyRIT material.
- Promptfoo and Garak documentation.
- Book: Generative AI Security.

### Track B.3: Agentic Systems, Tools, MCP, And Automation Boundaries

Goal: design agent systems that can use tools without gaining unsafe authority.

#### Learn

- Agent risk patterns: excessive agency, tool misuse, confused deputy, identity abuse, goal manipulation, cascading failures, memory poisoning, insecure inter-agent communication, and insufficient observability.
- Capability minimization: smallest tool set, per-tool permissions, scoped credentials, short-lived delegated tokens, human approval for irreversible or external-facing actions.
- Trusted/untrusted separation: do not let untrusted content directly steer privileged planning; isolate retrieval, browsing, execution, and communication paths.
- Planner/executor split, action preview, approval checkpoints, reversible action ordering, step budgets, termination conditions, and fail-safe defaults.
- MCP and tool ecosystems: servers expose tools/resources/prompts; tool descriptions influence behavior; local and networked servers have different risk profiles.
- Dangerous combinations: untrusted content, private data, and ability to communicate externally in the same agent loop.

#### Practice

- Build a small tool-using agent with read-only, write, and external-communication tools separated by permission.
- Review one MCP server or plugin manifest for scope, descriptions, secrets, and network behavior.
- Add a human approval gate before destructive, costly, external, legal, financial, or safety-relevant actions.
- Run an agent red-team scenario where a malicious document attempts to trigger tool misuse.

#### Deliverables

- Agent permission matrix.
- Tool and MCP server review checklist.
- Agent action approval workflow.
- Agentic threat model.
- Agent audit-log design.

#### Read / Watch / Courses

- OWASP Agentic Applications Top 10 and Agentic Skills Top 10.
- MCP specification and security guidance from official project documentation.
- Simon Willison writing on agent/tool risk patterns.
- AgentDojo and AgentBench research for evaluation ideas.
- Course/lab: build a small agent and red-team its tool permissions.

### Track B.4: MLSecOps, AI Red Teaming, Privacy, And Assurance

Goal: test, monitor, and govern AI systems through deployment and change.

#### Learn

- MLSecOps lifecycle: data lineage, dataset versions, model artifacts, prompt versions, evaluation suites, deployment gates, rollback, prompt patching, model swaps, and provider outage playbooks.
- AI evaluation beyond accuracy: robustness, privacy, harmful outputs, abuse, fairness, tool misuse, and operational cost anomalies.
- Attack categories: adversarial examples, evasion, poisoning, backdoors, model extraction, membership inference, model inversion, attribute inference, and training-data extraction.
- Red-team tools: Garak, PyRIT, Promptfoo, ART, Foolbox, CleverHans, TextAttack, PrivacyRaven, Opacus, TensorFlow Privacy, MCP Inspector.
- Guardrail approaches: NeMo Guardrails, Guardrails AI, Llama Guard, ShieldGemma, Prompt Guard, Microsoft Presidio for PII detection.
- Provenance and watermarking limits: C2PA, SynthID, public watermarking approaches, evasion risk, and why watermarking is not a complete assurance control.

#### Practice

- Run automated and manual red-team tests against one LLM or RAG demo.
- Create an evaluation suite for prompt injection, unsafe output, sensitive disclosure, and tool misuse.
- Test membership-inference or adversarial examples on a small ML model.
- Write an AI incident response addendum for prompt attack, data leak, model outage, and unsafe tool execution.

#### Deliverables

- AI red-team report.
- AI evaluation plan.
- AI incident response addendum.
- Model/prompt change-control record.
- AI monitoring and rollback playbook.

#### Read / Watch / Courses

- NIST adversarial machine learning taxonomy.
- MITRE ATLAS case studies.
- Carlini et al. work on memorization and training-data extraction.
- Microsoft PyRIT documentation and examples.
- Conferences: OWASP GenAI, AI Village, Black Hat/DEF CON AI security talks.

### Track C.1: Defence Industry, Säkerhetsskydd, And Threat Context

Goal: understand defence suppliers, classified projects, national security, and advanced threat environments.

#### Learn

- Swedish defence ecosystem: Försvarsmakten, FMV, FOI, FRA, MUST, Säkerhetspolisen, MCF, Försvarshögskolan, MPF, SOFF, and defence suppliers.
- Säkerhetsskydd concepts in defence: security-sensitive activity, security-classified information, protective security analysis, security measures, and security protection agreements.
- Threat model: foreign intelligence services, insiders, supply-chain compromise, influence operations, export-control exposure, and long-lived program sensitivity.
- Classification and handling: Swedish security classifications, NATO context, need-to-know, marking, handling, storage, transfer, and destruction.
- Sweden's NATO context and how NATO collaboration changes industrial security expectations.
- Swedish defence industry examples: Saab, Combitech, Sectra, BAE Systems Hägglunds/Bofors, GKN Aerospace, Volvo Defense, Aimpoint, Norma, Tutus, Advenica, Truesec.

#### Practice

- Run a mock säkerhetsskyddsanalys for a defence supplier project.
- Identify which project assets, systems, people, facilities, suppliers, and information flows may become security-sensitive.
- Create a classification decision memo for a fictional defence collaboration.
- Draft a supplier onboarding checklist for a security-sensitive project.

#### Deliverables

- Defence säkerhetsskyddsanalys outline.
- Security classification memo.
- Supplier security onboarding checklist.
- Project security responsibility map.
- Defence threat brief.

#### Read / Watch / Courses

- Säkerhetsskyddslag and säkerhetsskyddsförordning.
- Säkerhetspolisen vägledningar on säkerhetsskydd.
- Försvarsmakten open publications on säkerhetsskydd.
- MCF/MSB material on information security and civil defence.
- Försvarshögskolan public lectures and courses where relevant.

### Track C.2: Classified Systems, KSF, COMSEC, TEMPEST, And High Assurance

Goal: understand security expectations for classified or high-assurance defence systems.

#### Learn

- KSF and Swedish defence system authorization context.
- COMSEC and cryptographic-material handling: custody, approved products, keying material, rotation, destruction, and incident handling.
- TEMPEST/EMSEC: red/black separation, zoning, shielding, filtering, grounding, and operational leakage risks.
- High-assurance architecture: multilevel security, guards, cross-domain solutions, data diodes, separation kernels, Bell-LaPadula, Biba, and trusted paths.
- Evaluation and assurance: Common Criteria, CCRA, SOG-IS, EUCC, CSEC, FIPS 140-3, secure hardware certifications, and evidence expectations.
- Classified collaboration environments: secure rooms, approved communications, removable media control, logging, and administrative separation.

#### Practice

- Map a classified information flow and identify red/black boundaries.
- Design a simple cross-domain information-sharing pattern and list the assurance questions it raises.
- Compare a normal enterprise architecture review with a classified-system authorization review.
- Build a checklist for removable media and admin access in a high-assurance environment.

#### Deliverables

- Classified system security concept.
- Red/black separation diagram.
- COMSEC responsibility checklist.
- Cross-domain solution risk memo.
- High-assurance evidence checklist.

#### Read / Watch / Courses

- KSF v3.1 where accessible and relevant.
- NATO security policy open material.
- Common Criteria / ISO/IEC 15408 overview.
- FIPS 140-3 overview material.
- Public material from CSEC, SOG-IS, and ENISA certification pages.

### Track C.3: Defence Suppliers, Export Control, NATO, And Counterintelligence

Goal: manage supplier, legal, personnel, and international collaboration risks in defence industry work.

#### Learn

- Supplier flow-down: security requirements, subcontractors, access control, audit rights, incident notification, classification handling, and project closure.
- SUA and security-protection agreements in practice.
- Export control: krigsmateriel, dual-use goods, EU Dual-Use Regulation, sanctions, Wassenaar context, ITAR/EAR exposure, and technology-transfer risk.
- NATO industrial security concepts and program-specific security instructions.
- Personnel security: security vetting, registerkontroll, continuing suitability, travel security, insider threat, and foreign intelligence targeting.
- Crisis and incident communication in defence contexts: customer, authority, supplier, media, and employee communication constraints.

#### Practice

- Build an export-control trigger checklist for a technical project.
- Draft supplier flow-down clauses for a classified collaboration.
- Run a tabletop where a supplier loses security-classified information.
- Write a travel-security and foreign-contact briefing for staff in a sensitive project.

#### Deliverables

- Defence supplier security plan.
- Export-control trigger checklist.
- Supplier flow-down requirements.
- Insider and counterintelligence awareness checklist.
- Classified collaboration incident playbook.

#### Read / Watch / Courses

- ISP material on krigsmateriel and dual-use products.
- Säpo annual reports for threat context.
- FOI publications where relevant.
- SOFF events and defence-industry material.
- Tallinn Manual 2.0 as context for international law in cyberspace.

### Track D.1: IoT Product Architecture, Regulation, And Risk

Goal: secure connected products across device, connectivity, cloud, application, support, and lifecycle.

#### Learn

- IoT categories: consumer IoT, enterprise IoT, industrial IoT, critical IoT, medical/health IoT, and defence-adjacent IoT.
- Architecture tiers: device, connectivity, gateway, cloud/application, mobile/web, support, manufacturing, and fleet operations.
- Threat boundaries: hostile local network, device-to-cloud, gateway-to-cloud, cloud-to-user, cloud-to-cloud, mobile-to-cloud, manufacturing-to-fleet.
- Regulation and standards: Cyber Resilience Act, Radio Equipment Directive delegated cybersecurity requirements, EN 18031, GDPR, NIS2/Cybersäkerhetslagen, ETSI EN 303 645, NISTIR 8259/8425, IEC 62443 for IIoT.
- Common IoT pitfalls: default credentials, no update mechanism, unsigned updates, hardcoded keys, weak randomness, poor certificate validation, open debug interfaces, weak mobile apps, and insecure cloud APIs.
- Privacy risks: always-on sensing, location, behavioral inference, children/household data, telemetry retention, and edge processing tradeoffs.

#### Practice

- Draw an end-to-end IoT architecture for a device, mobile app, cloud backend, update service, support portal, and manufacturing environment.
- Map the architecture against CRA, ETSI EN 303 645, and NISTIR 8259 requirements.
- Identify privacy risks from telemetry and write minimization controls.
- Review a consumer IoT vulnerability report and map findings to lifecycle controls.

#### Deliverables

- IoT architecture and trust-boundary diagram.
- CRA/ETSI/NIST control mapping.
- IoT privacy and telemetry checklist.
- Product security risk register.
- IoT threat model.

#### Read / Watch / Courses

- ETSI EN 303 645 and TS 103 701.
- NISTIR 8259 Rev. 1 and NISTIR 8425.
- EU Cyber Resilience Act summaries and official text.
- EN 18031 series overview material.
- Book: Practical IoT Hacking.

### Track D.2: IoT Identity, Provisioning, Attestation, And Communication

Goal: design device identity and trust at fleet scale.

#### Learn

- Unique per-device identity using X.509 certificates, mTLS, secure elements, TPMs, DICE, hardware unique keys, and cloud IoT identity services.
- Provisioning options: factory provisioning, first-boot enrollment, EST, BRSKI, FIDO Device Onboard, OPC UA onboarding, AWS IoT Core, Azure IoT Hub DPS, Eclipse Hono.
- Attestation: local and remote attestation, nonce/quote patterns, TPM quotes, DICE, RATS, EAT, firmware measurement, configuration measurement, and cloud verification.
- Communication security: TLS 1.3, DTLS 1.3, OSCORE, EDHOC, MQTT over TLS, AMQP over TLS, CoAP security, certificate validation, rotation, and revocation.
- Fleet-scale identity risk: shared credentials, cloned devices, leaked manufacturing keys, weak enrollment authorization, and poor revocation.
- Cellular IoT considerations: NB-IoT, LTE-M, eSIM, iSIM, USIM identity, PLMN restrictions, IMEI blocklists, and anomaly detection.

#### Practice

- Design a per-device identity and provisioning sequence for 10,000 devices.
- Implement or mock mTLS between a device and cloud broker.
- Write an attestation verification flow for expected firmware state.
- Create a revocation and device-quarantine process for suspected cloned devices.

#### Deliverables

- Device identity architecture.
- Provisioning sequence diagram.
- Attestation evidence flow.
- Fleet revocation and quarantine plan.
- Secure communication baseline.

#### Read / Watch / Courses

- RFC 9334 RATS architecture and Entity Attestation Token material.
- RFC 8995 BRSKI and RFC 7030 EST.
- Cloud provider IoT identity documentation.
- GSMA eSIM remote SIM provisioning overview for cellular IoT context.
- OPC UA security and onboarding material.

### Track D.3: IoT Updates, Cloud Backends, Mobile Apps, And Fleet Operations

Goal: secure the operational systems that keep connected products alive after launch.

#### Learn

- Update mechanisms: signed updates, anti-rollback, recovery, staged rollout, A/B partitions, TUF, Uptane, SUIT, Mender, RAUC, SWUpdate.
- Cloud control plane risks: device registry, command APIs, OTA service, telemetry pipeline, customer portal, support tooling, and administrative actions.
- Mobile and web app risks: API authorization, token storage, insecure pairing, weak tenant separation, and excessive device-control permissions.
- Fleet monitoring: device health, update success, certificate expiry, anomalous command patterns, telemetry privacy, and abuse detection.
- Vulnerability operations: disclosure policy, intake, triage, coordinated disclosure, patch communication, support lifetime, and end-of-life risk.
- Cloud compromise to fleet compromise: OTA signing, command channels, enrollment systems, and support accounts as high-impact paths.

#### Practice

- Build an update threat model and test failed update, rollback, corrupt manifest, expired certificate, and interrupted power scenarios.
- Map all cloud roles that can issue device commands or initiate firmware rollout.
- Review a mobile app API for authorization and tenant separation risks.
- Draft an end-of-life communication and cloud shutdown plan.

#### Deliverables

- Secure update architecture.
- Fleet monitoring and alerting plan.
- Cloud-to-device command authorization matrix.
- Vulnerability disclosure and support lifetime policy.
- End-of-life and decommissioning plan.

#### Read / Watch / Courses

- TUF, Uptane, and SUIT documentation.
- Mender, RAUC, and SWUpdate project documentation.
- OWASP MASVS and API Security Top 10.
- Cloud provider IoT security reference architectures.
- DEF CON IoT Village talks.

### Track D.4: Industrial IoT, OT Interfaces, And Cyber-Physical Safety

Goal: understand where IoT meets industrial control, safety, and critical infrastructure.

#### Learn

- IIoT versus traditional OT: sensors, gateways, edge compute, cloud analytics, remote maintenance, industrial 5G, and TSN.
- Purdue model basics: Level 0-3 control environments, industrial DMZ, enterprise boundary, and controlled data flow.
- Protocol characteristics: Modbus, DNP3, IEC 60870-5-104, IEC 61850, PROFINET, EtherCAT, OPC UA, S7, and security add-ons.
- IEC 62443 roles and concepts: asset owner, integrator, product supplier, service provider, zones, conduits, SL0-SL4, FR1-FR7.
- OT visibility and segmentation: passive monitoring, vendor remote access, jump servers, time-bounded access, session recording, and unidirectional gateways.
- Safety and availability constraints: why patching, scanning, and response can be operational projects rather than routine IT actions.

#### Practice

- Build a small Purdue-style architecture diagram for an IIoT deployment.
- Walk through an IEC 62443-3-2 style risk assessment for one zone.
- Design a vendor remote access pattern for an industrial gateway.
- Map one OT incident scenario to detection, containment, and regulatory reporting.

#### Deliverables

- IIoT/OT architecture diagram.
- IEC 62443 zone-and-conduit assessment.
- Vendor remote access procedure.
- OT incident response scenario.
- Industrial telemetry risk memo.

#### Read / Watch / Courses

- NIST SP 800-82r3 Guide to Operational Technology Security.
- IEC 62443 overview material.
- MITRE ATT&CK for ICS.
- Dragos Year in Review reports.
- Courses: SANS ICS410/ICS515 or ISA/IEC 62443 fundamentals.

### Track E.1: Automotive Cybersecurity Management, Standards, And Regulation

Goal: understand vehicles as safety-critical, connected, regulated cyber-physical systems.

#### Learn

- Automotive constraints: functional safety culture, long development cycles, long service life, fleet scale, supplier depth, type approval, OTA, and software-defined vehicles.
- Standards and regulation: UN R155, UN R156, ISO/SAE 21434, ISO 24089, ISO/PAS 5112, ISO/SAE 8475, ISO 26262, ISO 21448 SOTIF, AUTOSAR security documents.
- ISO/SAE 21434 structure: organizational cybersecurity management, project-dependent management, distributed activities, continual activities, concept, development, validation, production, operations, maintenance, and end of cybersecurity support.
- CSMS and SUMS evidence expectations for market access.
- Supplier interfaces: cybersecurity interface agreements, out-of-context development, component assumptions, evidence packages, and vulnerability handling.
- Swedish automotive context: Volvo Cars, Volvo Group, Scania, Polestar, CEVT, Autoliv, Einride, Lindholmen, and the Gothenburg/Södertälje supplier ecosystem.

#### Practice

- Map ISO/SAE 21434 work products for one ECU or connected vehicle feature.
- Build a CSMS evidence checklist for a fictional project.
- Review how UN R155 and R156 obligations map to engineering and operations.
- Draft a supplier cybersecurity interface agreement outline.

#### Deliverables

- Automotive cybersecurity management map.
- ISO/SAE 21434 evidence checklist.
- CSMS/SUMS responsibility matrix.
- Supplier cybersecurity interface agreement outline.
- Swedish automotive ecosystem map.

#### Read / Watch / Courses

- ISO/SAE 21434 overview material and official standard where available.
- UNECE Regulation No. 155 and No. 156.
- ISO 24089 overview material.
- AUTO-ISAC best practice guides.
- Conference: escar Europe talks and proceedings.

### Track E.2: TARA, Vehicle Architecture, And Attack Paths

Goal: analyze vehicle cybersecurity risk from architecture to attack feasibility.

#### Learn

- TARA steps: assets, cybersecurity properties, threat scenarios, impact ratings, attack paths, attack feasibility, risk, treatment, cybersecurity goals, and claims.
- Vehicle architectures: domain architecture, zonal architecture, central compute, gateways, ECUs, sensors, actuators, telematics, infotainment, diagnostics, OTA, and mobile/cloud ecosystem.
- Networks and protocols: CAN, CAN-FD, LIN, FlexRay, MOST, Automotive Ethernet, SOME/IP, DoIP, UDS.
- Attack-path thinking: infotainment to gateway, telematics to vehicle network, mobile app to cloud to vehicle, diagnostics misuse, OTA compromise, and supplier update-chain compromise.
- Impact categories: safety, financial, operational, privacy, legal/regulatory, and fleet-wide reputational impact.
- Relationship between ISO/SAE 21434, ISO 26262, and SOTIF in system-level decisions.

#### Practice

- Perform a TARA for a telematics control unit or OTA update path.
- Draw an attack path from mobile account compromise to vehicle control risk.
- Rate attack feasibility using knowledge, expertise, equipment, time, and opportunity.
- Convert TARA results into cybersecurity goals and technical requirements.

#### Deliverables

- Automotive TARA.
- Vehicle attack-path diagram.
- Cybersecurity goals and claims.
- ECU cybersecurity requirements.
- TARA-to-test traceability matrix.

#### Read / Watch / Courses

- ISO/SAE 21434 TARA sections.
- ISO/PAS 5112 audit guidance overview.
- The Car Hacker's Handbook.
- Practical Vehicle Cybersecurity.
- Car Hacking Village talks and labs.

### Track E.3: In-Vehicle Security, OTA, Diagnostics, And V2X

Goal: secure the technical mechanisms inside and around the vehicle.

#### Learn

- Automotive HSMs: SHE, EVITA, HSE/ICU-S equivalents, secure key storage, secure counters, and crypto services.
- SecOC: authenticated messages, freshness values, MACs, key management, and replay protection.
- AUTOSAR Classic and Adaptive security: identity, communication protection, platform security, IdsM, IdsR, and diagnostics integration.
- Diagnostics: UDS, SecurityAccess, Authentication Service 0x29, DoIP, secure service access, repair workflows, and right-to-repair tension.
- OTA security: signed manifests, A/B, rollback protection, campaign management, safety preconditions, recovery, and software bill of materials.
- V2X and charging: IEEE 1609.2, ETSI TS 103 097, SCMS/CCMS, pseudonym certificates, misbehavior detection, OCPP, ISO 15118.

#### Practice

- Design a secure diagnostic access model with roles, authentication, and audit logging.
- Review an OTA update sequence for rollback, bricking, campaign authorization, and safety preconditions.
- Map SecOC assumptions for one message family.
- Threat model an EV charging or V2X scenario.

#### Deliverables

- Diagnostic security checklist.
- OTA security checklist.
- In-vehicle key management note.
- SecOC requirements outline.
- V2X or charging threat model.

#### Read / Watch / Courses

- AUTOSAR security documentation.
- ISO 24089 software update engineering material.
- UNECE R156.
- ISO 15118 and OCPP security summaries.
- escar, Auto-ISAC, and Car Hacking Village technical talks.

### Track E.4: VSOC, Fleet Operations, Cloud, And Supplier Response

Goal: operate automotive cybersecurity after vehicles are in the field.

#### Learn

- VSOC sources: ECU IDS events, telematics, mobile app logs, OEM cloud logs, OTA campaign data, diagnostics, service portals, and supplier reports.
- Detection engineering: anomalous diagnostics, suspicious OTA behavior, unusual vehicle-to-cloud patterns, account takeover, mobile abuse, and fleet-wide indicators.
- Incident response: vehicle safety decisions, fleet containment, supplier coordination, authority communication, customer communication, and forensic preservation.
- Coordinated disclosure and vulnerability handling across OEMs, Tier 1s, Tier 2s, consultants, and security researchers.
- Cloud/vehicle boundary: vehicle identity, cloud identity, mobile identity, supplier identity, OTA signing, and administrative separation.
- Privacy: driver behavior, location, biometrics, infotainment data, charging data, and retention decisions.

#### Practice

- Build a VSOC detection coverage map for a connected vehicle feature.
- Run a tabletop where a supplier component vulnerability affects a fleet.
- Draft customer and authority communication for a connected-vehicle incident.
- Map privacy controls for vehicle telemetry and driver monitoring.

#### Deliverables

- VSOC detection coverage map.
- Automotive incident response playbook.
- Supplier vulnerability coordination plan.
- Vehicle telemetry privacy checklist.
- Fleet containment decision memo.

#### Read / Watch / Courses

- Auto-ISAC best practices.
- ENISA and NHTSA vehicle cybersecurity publications.
- OEM coordinated disclosure examples.
- Practical Vehicle Cybersecurity.
- Talks from escar Europe and S4/ICS events where vehicle systems overlap with cyber-physical operations.

### Track F.1: Cloud Architecture, Shared Responsibility, And Identity

Goal: design cloud foundations where identity, tenancy, guardrails, and responsibility are explicit.

#### Learn

- Service models: IaaS, PaaS, SaaS, serverless, managed databases, managed Kubernetes, managed AI platforms, and how responsibility shifts.
- Deployment models: public, private, hybrid, multi-cloud, sovereign cloud, community cloud, and disconnected environments.
- Landing zones: organizations, management groups, accounts, subscriptions, projects, folders, tenants, policy inheritance, guardrails, and account vending.
- Environment separation: production, staging, development, sandbox, shared services, security tooling, and break-glass access.
- Identity: federation, SSO, MFA, phishing-resistant authentication, conditional access, IAM roles, service principals, managed identities, workload identity federation, PAM, JIT/JEA, and permission boundaries.
- Non-human identity: service accounts, CI/CD identities, workload identities, SPIFFE/SPIRE, short-lived credentials, secrets management, and detection of NHI compromise.

#### Practice

- Design a landing zone for one cloud provider with management, network, logging, security, and application accounts/subscriptions/projects.
- Build a shared responsibility matrix for IaaS, PaaS, SaaS, and managed Kubernetes.
- Inventory human and non-human identities in one environment.
- Replace one long-lived secret with a short-lived or federated identity pattern.

#### Deliverables

- Cloud landing zone design.
- Shared responsibility matrix.
- Cloud IAM model.
- Non-human identity inventory.
- Privileged access and break-glass procedure.

#### Read / Watch / Courses

- AWS Well-Architected Security Pillar.
- Microsoft Cloud Security Benchmark.
- Google Cloud security foundations blueprint.
- NIST SP 800-207 Zero Trust Architecture.
- CSA Cloud Controls Matrix and CCSK material.

### Track F.2: Cloud Network, Data Protection, KMS, And Sovereignty

Goal: protect data and exposure across cloud services, regions, networks, and jurisdictions.

#### Learn

- Network patterns: hub-and-spoke, transit gateways, virtual WAN, service endpoints, private endpoints, controlled egress, DNS filtering, ingress controllers, WAF, API gateways, DDoS protection, and ZTNA.
- Exposure management: public IPs, storage buckets, databases, container registries, SaaS sharing links, AI endpoints, secrets, and admin portals.
- Data protection: classification, data-flow mapping, storage permissions, object versioning, retention locks, database auditing, row/column controls, backup, restore testing, and ransomware recovery.
- Encryption and key management: KMS, HSM, BYOK, HYOK, customer-managed keys, key rotation, separation of duties, private PKI, mTLS, tokenization, pseudonymization, and anonymization.
- Data residency and sovereignty: region selection, cross-border transfers, support access, telemetry, logs, backups, subprocessors, lawful access, and concentration risk.
- Swedish and EU context: GDPR, NIS2/Cybersäkerhetslagen, DORA, CER, AI Act, OSL, and säkerhetsskydd depending on sector and data.

#### Practice

- Build a cloud data-flow diagram for one application with data stores, logs, backups, and support access.
- Review public exposure in a cloud or SaaS tenant.
- Design key ownership and rotation for a sensitive dataset.
- Write a cloud outsourcing/supplier risk memo for regulated or security-sensitive data.

#### Deliverables

- Cloud network segmentation design.
- Data-flow and residency map.
- Key management and encryption design.
- Cloud exposure assessment.
- Cloud supplier and sovereignty risk memo.

#### Read / Watch / Courses

- ISO/IEC 27017 and ISO/IEC 27018 overviews.
- CIS Benchmarks for AWS, Azure, Google Cloud, Kubernetes, Linux, and Windows.
- Provider documentation for private endpoints, KMS/HSM, logging, and storage controls.
- ENISA cloud and supply-chain publications.
- Course: provider security specialty training for one cloud platform.

### Track F.3: Cloud Workloads, Containers, DevSecOps, IaC, And SaaS

Goal: secure what runs in the cloud and how it is delivered.

#### Learn

- Workload security: hardened images, patching, vulnerability scanning, endpoint/workload protection, runtime detection, EDR/CWPP, and rebuild-from-trusted-source patterns.
- Container security: image minimization, scanning, signing, SBOM, provenance, admission control, registry access, runtime detection, and supply-chain integrity.
- Kubernetes security: RBAC, namespace isolation, network policies, pod security, secrets, API server security, audit logging, service mesh, mTLS, and multi-tenancy.
- Serverless and managed services: permissions, event-source security, isolation assumptions, dependency risk, logging, and managed AI platform configuration.
- DevSecOps and IaC: Terraform, Bicep, CloudFormation, Pulumi, Helm, Kustomize, GitOps, IaC scanning, policy-as-code, protected branches, runner isolation, least-privilege deployment roles, secret scanning, and drift detection.
- SaaS security: inventory, SSO, SCIM, tenant baselines, external sharing, admin roles, audit logs, OAuth consent, retention, eDiscovery, integrations, exit plans, and SSPM/CASB patterns.

#### Practice

- Harden a Kubernetes namespace and document RBAC, network policy, pod security, and secrets handling.
- Add IaC scanning, secret scanning, and signed artifact provenance to a CI/CD workflow.
- Review SaaS tenant settings for SSO, external sharing, audit logs, and admin roles.
- Create a policy-as-code rule that prevents public storage or overly broad IAM.

#### Deliverables

- Container/Kubernetes security checklist.
- IaC guardrail and policy-as-code set.
- CI/CD deployment identity model.
- SaaS security baseline.
- Cloud supply-chain risk assessment.

#### Read / Watch / Courses

- Kubernetes security documentation and OWASP Kubernetes Top 10.
- SLSA, in-toto, Sigstore, Cosign, CycloneDX, and SPDX documentation.
- CIS Benchmarks for Kubernetes and cloud platforms.
- Provider DevSecOps and workload identity documentation.
- CNCF cloud-native security whitepapers.

### Track F.4: Cloud Detection, Response, Governance, And Assurance

Goal: operate cloud security with evidence, detection, response, and compliance that matches cloud speed.

#### Learn

- Log sources: identity, control plane, data plane, DNS, network flow, firewall, WAF, endpoint, container, Kubernetes, storage, database, SaaS audit logs, CI/CD, and managed AI platforms.
- Security tooling categories: CSPM, CNAPP, CWPP, CIEM, SSPM, CASB, DSPM, SIEM, SOAR, EDR, and cloud-native detections.
- Detection scenarios: suspicious API calls, public exposure, privilege escalation, impossible travel, consent abuse, key creation, crypto-mining, mass data access, compromised CI/CD runners, and SaaS data leakage.
- Cloud incident response: exposed storage, leaked keys, compromised admin account, ransomware, image rebuilds, snapshotting, evidence preservation, account quarantine, key rotation, and redeployment from trusted IaC.
- Governance and assurance: cloud control ownership, risk register, audit evidence, SOC 2/ISAE reports, supplier review, incident notification, exit assistance, concentration risk, and resilience testing.
- FinOps and security tradeoffs: logging cost, retention, regional replication, backup cost, reserved capacity, and cost-abuse detection.

#### Practice

- Build a detection coverage map for one cloud environment.
- Write runbooks for exposed storage, leaked keys, compromised admin, and compromised CI/CD runner.
- Collect audit evidence for a small cloud control set.
- Run a cloud incident tabletop with legal, communications, engineering, and management roles.

#### Deliverables

- Cloud logging and detection coverage map.
- Cloud incident runbooks.
- Evidence automation plan.
- Cloud control mapping to ISO/NIST/CSA/CIS.
- Cloud resilience and concentration-risk memo.

#### Read / Watch / Courses

- CSA Cloud Controls Matrix.
- CIS Controls and CIS Benchmarks.
- Provider incident response and logging guidance.
- SANS cloud forensics and cloud security talks.
- Course: CCSP, CCSK, or provider security specialty depending on role.

### Track G.1: Telecom Architecture, Standards, And Swedish Context

Goal: understand telecommunications infrastructure, standards bodies, operator responsibilities, and the Swedish telecom ecosystem.

#### Learn

- Telecom architecture layers: RAN, core, transport, OSS/BSS, service platforms, subscriber systems, roaming, lawful interception, and customer-facing channels.
- Mobile generations: 2G/GSM, 3G/UMTS, 4G/LTE, 5G NSA, 5G SA, and early 6G research.
- 4G LTE elements: eNodeB, MME, SGW, PGW, HSS, PCRF, IMS, and Diameter signaling.
- 5G core service-based architecture: NRF, AMF, SMF, UPF, AUSF, UDM, NEF, PCF, NSSF, SEPP, and network exposure patterns.
- Standards ecosystem: 3GPP SA3, GSMA NESAS/SCAS/FS.31, ITU-T SG17, ETSI, IETF, ENISA, and operator security forums.
- Swedish context: Ericsson, Telia, Tele2, Telenor Sverige, Tre, PTS, Kista telecom security ecosystem, Ericsson Research, KTH/LiU telecom research, FOI/Saab defence-side telecom relevance.
- Regulatory context: LEK, PTS supervision, NIS2/Cybersäkerhetslagen, säkerhetsskydd in sensitive operator contexts, EU 5G Toolbox, ePrivacy, lawful interception, and data retention.

#### Practice

- Draw a high-level Swedish mobile operator architecture with RAN, transport, core, OSS/BSS, SOC, roaming, and external interfaces.
- Read a 3GPP SA3 security architecture overview and identify the major security domains.
- Map a telecom service against LEK, PTS supervision, and NIS2/Cybersäkerhetslagen applicability.
- Compare telecom availability expectations with normal enterprise IT recovery expectations.

#### Deliverables

- Telecom architecture diagram.
- Telecom standards map.
- LEK/NIS2 applicability memo.
- Swedish telecom ecosystem map.
- Operator responsibility and authority matrix.

#### Read / Watch / Courses

- 3GPP TS 33.501 and TS 33.401 overviews.
- GSMA NESAS, SCAS, and FS.31 material.
- ENISA 5G Threat Landscape and 5G Supply Chain reports.
- PTS guidance on electronic communications security and LEK.
- Ericsson Technology Review and GSMA security publications.

### Track G.2: 5G Security, Slicing, MEC, And Open RAN

Goal: understand the security properties and weak points of modern 5G architectures.

#### Learn

- 5G security concepts: SUCI, SUPI protection, 5G-AKA, EAP-AKA', AUSF, UDM, SEPP, SBA security, service authorization, and HTTP/2/TLS between network functions.
- Network slicing: slice isolation, NSSF role, shared infrastructure risk, assurance evidence, tenant boundaries, and operational failure modes.
- Multi-access edge computing: MEC placement, local breakout, edge application trust, API exposure, tenant isolation, latency-sensitive controls, and cloud-edge operations.
- RAN security: gNodeB, CU/DU split, fronthaul/midhaul/backhaul security, synchronization risk, physical site exposure, and RAN management.
- Open RAN: O-RAN interfaces, near-real-time RIC, xApps/rApps, supply-chain expansion, multivendor assurance, and integration risk.
- Roaming security: SS7, Diameter, SEPP, IPX providers, inter-PLMN trust, fraud exposure, and roaming-partner incident coordination.
- Security assurance: NESAS, SCAS, vendor hardening, configuration baselines, product security incident response, and supply-chain geopolitics.

#### Practice

- Draw security boundaries for a 5G network slice or MEC deployment.
- Build a threat model for one 5G slice that supports a critical IoT or public-sector workload.
- Review Open RAN threat surfaces and identify which controls belong to vendor, integrator, and operator.
- Walk through a roaming signaling abuse scenario and identify detection and coordination needs.

#### Deliverables

- 5G slice security boundary diagram.
- MEC threat model.
- Open RAN risk register.
- Roaming abuse scenario.
- 5G assurance evidence checklist.

#### Read / Watch / Courses

- 3GPP TS 33.501.
- ENISA Security in 5G Specifications.
- GSMA NESAS and SCAS documentation.
- O-RAN Alliance security publications.
- Books: LTE Security and 5G Mobile Networks: A Systems Approach.

### Track G.3: Operator Security Operations, Fraud, BGP, DNS, And Roaming

Goal: operate telecom security across network operations, internet routing, fraud, and incident coordination.

#### Learn

- NetSOC and operator SOC models: network alarms, control-plane telemetry, signaling events, BGP/DNS events, customer abuse, fraud, lawful-interception constraints, and regulator reporting.
- Fraud types: SIM box, subscription fraud, roaming fraud, IRSF, Wangiri, SMS abuse, smishing infrastructure, and premium-rate abuse.
- BGP security: route leaks, hijacks, RPKI, route filtering, MANRS, peering policy, DDoS rerouting, and incident coordination.
- DNS security: DNSSEC, resolver abuse, DoH/DoT tradeoffs, domain abuse, sinkholing, cache poisoning, and telecom-scale resolver operations.
- DDoS and availability: volumetric attacks, mobile packet core impact, DNS impact, customer-facing mitigation, scrubbing centers, and critical-service prioritization.
- Roaming and partner coordination: IPX providers, interconnect trust, abuse signals, contract obligations, evidence exchange, and escalation paths.
- Incident communication: PTS, CERT-SE/MCF, customers, enterprise clients, roaming partners, vendors, media, and legal functions.

#### Practice

- Build a telecom detection coverage map for BGP, DNS, fraud, DDoS, and signaling abuse.
- Walk through one route hijack and one DNS incident affecting an operator.
- Draft a fraud escalation workflow from detection to customer action and partner communication.
- Run a tabletop for a combined DDoS and roaming abuse incident.

#### Deliverables

- Network SOC detection coverage map.
- BGP and DNS security baseline.
- Telecom fraud response workflow.
- Roaming incident coordination playbook.
- PTS/CERT-SE notification decision tree.

#### Read / Watch / Courses

- MANRS and RIPE routing security material.
- ICANN, IETF, and DNS-OARC material on DNS security.
- GSMA fraud and security resources.
- ENISA telecom threat landscape material.
- RIPE and DEF CON Telecom Village talks.

### Track G.4: Cellular IoT, Private Networks, And Telecom Supply Chain

Goal: secure cellular-connected products, private networks, and telecom supplier dependencies.

#### Learn

- Cellular IoT: NB-IoT, LTE-M, eSIM, iSIM, remote SIM provisioning, SGP.31/SGP.32, APNs, private APNs, network restrictions, IMEI controls, and anomaly detection.
- Device-to-operator-to-cloud identity: USIM identity, device certificate identity, cloud identity, ownership transfer, lifecycle events, and decommissioning.
- Private mobile networks: industrial 5G, campus networks, public-sector deployments, spectrum, operator-managed services, vendor-managed services, and local breakout.
- Telecom cloudification: virtualized network functions, CNFs, Kubernetes, cloud-native packet core, CI/CD, image provenance, and NFV orchestration.
- Supplier risk: vendor concentration, software update channels, managed services, integration partners, lawful-interception vendors, OSS/BSS suppliers, and geopolitical restrictions.
- Regulation overlap: LEK, NIS2/Cybersäkerhetslagen, CRA for connected products, RED delegated acts, GDPR/ePrivacy, säkerhetsskydd where networks support security-sensitive activity.

#### Practice

- Design a cellular IoT identity and provisioning flow for devices using eSIM/iSIM and cloud onboarding.
- Threat model a private 5G network used in manufacturing, transport, or public safety.
- Review a telecom supplier chain and identify high-impact update, support, and management dependencies.
- Write security requirements for a cellular connectivity supplier.

#### Deliverables

- Cellular IoT identity architecture.
- Private 5G threat model.
- Telecom supplier risk assessment.
- Cellular connectivity security requirements.
- Telecom lifecycle and decommissioning checklist.

#### Read / Watch / Courses

- GSMA eSIM and remote SIM provisioning material.
- GSMA IoT Security Guidelines.
- NIST SP 800-187 Guide to LTE Security.
- ENISA 5G supply-chain material.
- Ericsson, Nokia, and cloud-provider telecom security architecture material.

### Track H.1: OT/ICS Foundations, Purdue, And Safety Constraints

Goal: understand operational technology as a safety- and availability-driven security domain.

#### Learn

- OT/ICS scope: PLCs, RTUs, IEDs, SCADA, HMIs, engineering workstations, historians, safety instrumented systems, DCS, BMS, and industrial networks.
- Why OT differs: availability and safety first, long equipment life, deterministic control, limited maintenance windows, vendor dependency, fragile legacy protocols, and physical consequences.
- Purdue model: levels 0-5, industrial DMZ at level 3.5, controlled data flows, and modern deviations caused by cloud, IIoT, and remote operations.
- Safety and process context: when security action can create downtime, unsafe states, environmental harm, equipment damage, or loss of life.
- Attack history: Stuxnet, Industroyer, Triton/Trisis, Industroyer2, FrostyGoop, ransomware against plants and utilities, and cloud-to-operations incidents.
- Swedish sectors: energy, water, transport, manufacturing, mining, process industry, ports, buildings, and critical societal activity.
- Regulation context: NIS2/Cybersäkerhetslagen, CER, sectoral supervision, MSB/MCF, IEC 62443, and security protection where operations are security-sensitive.

#### Practice

- Draw a Purdue-style architecture for a small plant, utility, railway, or building automation environment.
- Identify which assets are safety-critical, availability-critical, and business-critical.
- Compare an IT incident response action with its OT operational constraints.
- Read one public OT incident report and extract technical, process, and governance lessons.

#### Deliverables

- OT/ICS architecture map.
- Safety and availability assumptions note.
- Critical OT asset list.
- OT incident case-study summary.
- OT regulatory applicability memo.

#### Read / Watch / Courses

- NIST SP 800-82r3 Guide to Operational Technology Security.
- IEC 62443 overview material.
- Dragos Year in Review reports.
- SANS ICS publications and webcasts.
- Books: Industrial Network Security and Hacking Exposed Industrial Control Systems.

### Track H.2: Industrial Protocols, Asset Inventory, And Visibility

Goal: understand OT communication patterns and build visibility without creating operational risk.

#### Learn

- Industrial protocols: Modbus, DNP3, IEC 60870-5-104, IEC 61850, PROFINET, EtherCAT, OPC UA, Siemens S7/S7CommPlus, BACnet, MQTT, and vendor-specific protocols.
- Protocol security characteristics: authentication gaps, encryption gaps, replay risk, command semantics, timing requirements, and partial adoption of secure variants.
- OT asset inventory fields: vendor, model, firmware, function, criticality, owner, location, network segment, process dependency, lifecycle status, support contract, and known vulnerabilities.
- Passive monitoring: span/TAP architecture, protocol decoding, baseline communication patterns, asset fingerprinting, and detection of engineering activity.
- Active scanning risks: fragile devices, safety impact, network saturation, unauthorized writes, and need for maintenance windows.
- OT visibility tools: Dragos, Nozomi Networks, Claroty, Tenable OT, Forescout, Armis, vendor engineering tools, and SIEM integration.

#### Practice

- Build an OT asset inventory for a fictional or lab process.
- Compare passive and active discovery for the same OT environment and document risk.
- Map protocol flows between engineering workstation, HMI, PLC, historian, and enterprise systems.
- Build a vulnerability triage example where patching is delayed and compensating controls are needed.

#### Deliverables

- OT asset inventory.
- Protocol flow diagram.
- Passive monitoring design.
- OT vulnerability triage memo.
- Compensating-control plan.

#### Read / Watch / Courses

- MITRE ATT&CK for ICS.
- Vendor protocol security documentation for OPC UA, DNP3 Secure Authentication, IEC 62351, and PROFINET security classes.
- Dragos and Nozomi research reports.
- SANS ICS visibility and monitoring material.
- Sigrok/Wireshark protocol-analysis resources where relevant.

### Track H.3: IEC 62443, Segmentation, Remote Access, And Conduits

Goal: design OT security architecture using zones, conduits, roles, and operationally realistic control patterns.

#### Learn

- IEC 62443 structure: 1-x concepts, 2-x asset-owner and service-provider management, 3-x system risk and requirements, 4-x secure product development and component requirements.
- IEC 62443 roles: asset owner, system integrator, product supplier, maintenance provider, and managed service provider.
- Security levels: SL0-SL4, target security level, achieved security level, and why level claims must be tied to zones and conduits.
- Functional requirements FR1-FR7: identification/authentication, use control, system integrity, data confidentiality, restricted data flow, timely response, and resource availability.
- Segmentation patterns: industrial DMZ, firewalls, unidirectional gateways/data diodes, jump servers, remote access brokers, microsegmentation, and protocol-aware controls.
- Vendor remote access: MFA, approval workflow, time-bounded sessions, session recording, command restrictions, emergency access, and revocation.
- Change and patch management: maintenance windows, vendor validation, rollback plans, safety approval, spare parts, and end-of-life controls.

#### Practice

- Perform an IEC 62443-3-2 style risk assessment for one zone.
- Design zones and conduits for a small OT architecture with enterprise, DMZ, SCADA, PLC, and vendor access.
- Write a vendor remote access procedure and test its approval and logging requirements.
- Build a patch decision record where operational risk requires compensating controls.

#### Deliverables

- IEC 62443 zone-and-conduit assessment.
- OT segmentation design.
- Vendor remote access procedure.
- OT patch and compensating-control decision record.
- IEC 62443 control mapping.

#### Read / Watch / Courses

- IEC 62443-2-1, 2-3, 2-4, 3-2, 3-3, 4-1, and 4-2 overviews.
- ISA/IEC 62443 fundamentals.
- NIST SP 800-82r3 architecture sections.
- Waterfall, Fox-IT, Owl, and other data-diode architecture references.
- Courses: SANS ICS410/ICS456 or ISA/IEC 62443 practitioner training.

### Track H.4: OT Detection, Incident Response, Sectors, And IIoT

Goal: operate OT security across sectors, converged IT/OT environments, and cyber-physical incidents.

#### Learn

- OT detection engineering: engineering workstation activity, unauthorized logic changes, abnormal commands, new devices, unexpected routes, remote access anomalies, and process-aware detections.
- Incident response in OT: plant isolation, continued operation decisions, manual fallback, safety officer role, vendor role, evidence preservation, and restart criteria.
- Sector-specific concerns: electricity, district heating, water, rail, ports, manufacturing, process industry, mining, building automation, and healthcare facilities.
- Swedish operational context: Svenska kraftnät, Energimyndigheten, Livsmedelsverket, Trafikverket, Transportstyrelsen, municipal water, Vattenfall, Fortum, E.ON Sverige, ABB, Sandvik, SSAB, LKAB, Boliden, Tetra Pak, Volvo factories.
- IIoT and edge: gateways, cloud analytics, industrial 5G, TSN, remote maintenance, MQTT/OPC UA bridges, and device-to-cloud-to-OT attack paths.
- Regulatory reporting: sector authorities, CERT-SE/MCF, customer communication, environmental/safety communication, and continuity obligations.

#### Practice

- Create an OT detection coverage map using ATT&CK for ICS.
- Run a tabletop where ransomware reaches engineering workstations but production must remain safe.
- Map one IIoT gateway from sensor to cloud analytics and back into operational decisions.
- Draft a sectoral reporting matrix for a Swedish OT incident.

#### Deliverables

- OT detection coverage map.
- OT incident response playbook.
- IIoT risk assessment.
- Sectoral reporting matrix.
- Manual fallback and restart checklist.

#### Read / Watch / Courses

- MITRE ATT&CK for ICS.
- Dragos, SANS, and CISA OT incident publications.
- ENISA and MSB/MCF guidance for critical infrastructure.
- ISA/IEC 62443 and SANS ICS incident response courses.
- S4, SANS ICS Summit, and Black Hat ICS talks.

### Track I.1: Public Sector Legal Model, OSL, Records, And Governance

Goal: understand the legal and governance model that makes Swedish public-sector security different from private-sector security.

#### Learn

- Public-sector landscape: statliga myndigheter, regioner, kommuner, kommunala bolag, universities, agencies, public-sector suppliers, and shared service providers.
- Legal foundations: Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen, Offentlighets- och sekretesslagen, Förvaltningslagen, Kommunallagen, Arkivlagen, GDPR, dataskyddslagen, säkerhetsskyddslagen, and sector-specific laws.
- Offentlighetsprincipen: allmän handling, received/expedited/finalized records, secrecy assessment, diarieföring, archiving, public scrutiny, and incident-report implications.
- OSL reasoning: secrecy grounds, harm tests, time limits, confidentiality marking versus legal decision, and handling of security-sensitive details.
- Governance constraints: political accountability, tax-funded budgets, transparency, public procurement, audit, delegated decision-making, and variable security maturity.
- Public-sector data protection: legal obligation, exercise of official authority, special categories of data, registerförfattningar, DPIAs, and IMY expectations.

#### Practice

- Walk one security incident record through allmän handling, diarieföring, and OSL assessment questions.
- Read an OSL chapter relevant to a sector and write an applicability note.
- Map one public-sector security decision from operational owner to political or agency accountability.
- Build a public-sector information classification example that includes public, confidential, personal, and security-sensitive information.

#### Deliverables

- OSL applicability memo.
- Allmän handling and diarieföring procedure for security records.
- Public-sector governance map.
- Public-sector data protection trigger checklist.
- Information classification example.

#### Read / Watch / Courses

- Offentlighets- och sekretesslagen.
- Förvaltningslagen, Kommunallagen, Arkivlagen, and relevant constitutional material.
- IMY guidance for public-sector data processing.
- MSB/MCF method support for information security.
- Riksrevisionen reports on public-sector IT security.

### Track I.2: Procurement, Suppliers, Cloud, And Säkerhetsskydd

Goal: handle supplier and technology decisions in public-sector environments where law, contracts, security, and political accountability overlap.

#### Learn

- Public procurement: LOU, LUFS, framework agreements, Kammarkollegiet, Statens inköpscentral, evaluation criteria, direktupphandling, exclusion grounds, and conflict-of-interest rules.
- Security in tenders: ISO 27001, NIS2 alignment, GDPR processor terms, incident notification, logging, audit rights, subcontractors, exit assistance, vulnerability handling, and evidence requirements.
- Public-sector cloud decisions: data location, support access, metadata, logging, backups, subprocessors, lawful access, public-records handling, exit plans, concentration risk, and sovereign-cloud claims.
- Säkerhetsskydd in public sector: security-sensitive activity, säkerhetsskyddsanalys, security-classified information, SUA/security protection agreements, supplier vetting, and foreign ownership/control questions.
- Supplier ecosystem: Atea, Tietoevry, CGI, Knowit, Sopra Steria, Combitech, AFRY, Inera, SKR Företag, regional suppliers, and SaaS vendors.
- Contract lifecycle: requirements, evaluation, onboarding, access management, monitoring, audit, incident handling, renewals, and termination.

#### Practice

- Draft security requirements for a public-sector procurement of a cloud or SaaS service.
- Evaluate a supplier response against data protection, incident response, logging, subcontractor, and exit requirements.
- Write a säkerhetsskydd applicability note for a public-sector outsourcing scenario.
- Build an exit and continuity plan for a public-sector critical supplier.

#### Deliverables

- Public procurement security clause set.
- Supplier evaluation checklist.
- Cloud supplier risk assessment.
- Säkerhetsskydd applicability memo.
- Exit and continuity requirements.

#### Read / Watch / Courses

- LOU and LUFS.
- Kammarkollegiet procurement guidance.
- Säkerhetspolisen and Försvarsmakten open säkerhetsskydd guidance.
- MSB/MCF guidance on outsourcing and information security.
- SKR and Inera material where relevant.

### Track I.3: Sector Context: Healthcare, Justice, Education, And Municipal IT

Goal: understand how public-sector security changes by sector and service mission.

#### Learn

- Healthcare and regions: 21 regions, patientdatalagen, sammanhållen journalföring, Inera/1177, medical device regulation, NIS2 health scope, GDPR special category data, legacy systems, and vendor concentration.
- Law enforcement and justice: Polismyndigheten, Säkerhetspolisen, Åklagarmyndigheten, Domstolsverket, brottsdatalagen, forensic readiness, sensitive investigations, and säkerhetsskydd overlap.
- Education and research: schools, universities as myndigheter, children's data, learning platforms, research data, dual-use research, export control, and academic openness.
- Municipal IT: 290 municipalities, social services, schools, local infrastructure, small IT teams, outsourcing, ransomware exposure, political visibility, and variable maturity.
- Civil preparedness: totalförsvar, krigsplacering, critical societal activity, sector-responsible authorities, MSB/MCF coordination, and continuity planning.
- Typical incidents: ransomware, supplier outage, exposed personal data, identity compromise, DDoS against citizen services, and insecure integrations.

#### Practice

- Map a regional healthcare system against patientdatalagen, GDPR, NIS2, and operational continuity needs.
- Draft a municipal cybersecurity baseline for a small kommun.
- Build a research-data security assessment for a university project with dual-use implications.
- Run a tabletop for a supplier outage affecting schools, healthcare, or municipal services.

#### Deliverables

- Healthcare legal/control mapping.
- Municipal cybersecurity baseline.
- Education/research data risk assessment.
- Supplier outage tabletop report.
- Civil preparedness continuity outline.

#### Read / Watch / Courses

- Patientdatalagen and patientdataförordningen.
- Brottsdatalagen.
- SKR cybersecurity recommendations for municipalities and regions.
- E-hälsomyndigheten and Inera publications.
- MSB/MCF and Försvarshögskolan material on civil preparedness.

### Track I.4: Incident Management, Total Defence, And Public Accountability

Goal: manage public-sector incidents where transparency, continuity, secrecy, citizens, and political accountability collide.

#### Learn

- Public-sector incident roles: operational IT, agency leadership, communications, legal, DPO, säkerhetsskyddschef, procurement, records office, political leadership, sector authority, CERT-SE/MCF, and suppliers.
- Notification and reporting: GDPR, NIS2/Cybersäkerhetslagen, sectoral reporting, säkerhetsskydd incidents, police reports, procurement contract notice, and public communication.
- Public communication: citizen-facing impact, media scrutiny, open records, secrecy boundaries, status pages, service fallback, and trust restoration.
- Total defence: continuity, prioritization, manual fallback, krigsplacering, crisis organization, civil-military coordination, and resilience of critical societal activity.
- Post-incident handling: diarieföring, lessons learned, Riksrevisionen/IVO/IMY or sector review, political questions, budget changes, and procurement follow-up.
- Ethical and professional judgment: transparency about uncertainty, protecting sensitive details, not hiding risk behind legal language, and escalating weak preparedness.

#### Practice

- Run a public-sector ransomware tabletop including records handling, media, citizen services, supplier coordination, and legal notification.
- Draft a public incident update that is useful but does not disclose sensitive defensive details.
- Build a notification matrix for GDPR, NIS2, säkerhetsskydd, and sector-specific obligations.
- Write a post-incident review structure suitable for a public-sector organization.

#### Deliverables

- Public-sector incident playbook.
- Notification matrix.
- Public communication templates.
- Total defence continuity exercise.
- Post-incident review template.

#### Read / Watch / Courses

- MSB/MCF incident and continuity guidance.
- CERT-SE public incident guidance.
- IMY breach notification guidance.
- Försvarshögskolan civil preparedness courses and public lectures.
- Riksrevisionen and sector authority post-incident reports.

### Track X.1: Cross-Domain Product Security Model

Goal: combine specializations without losing the threat model of each domain.

#### Learn

- How one product can combine embedded hardware, IoT fleet services, cloud APIs, mobile apps, AI features, automotive safety, defence sensitivity, public-sector obligations, telecom connectivity, and OT interfaces.
- Layered reading method: assets, actors, authorities, data classes, safety impact, update path, identity path, supplier path, operational path, and end-of-life path.
- Control conflicts: safety versus patching, privacy versus telemetry, availability versus isolation, cloud convenience versus sovereignty, and AI feature speed versus assurance.
- Evidence layering: technical diagrams, legal applicability, safety analysis, threat model, supplier obligations, incident runbooks, and audit evidence.
- How to avoid local optimization: fixing a device issue while creating a cloud takeover path, or solving encryption while ignoring support access.

#### Practice

- Analyze a connected military vehicle, AI-enabled industrial product, or public-sector IoT platform through at least three specialization lenses.
- Map which teams own which controls and where handoffs can fail.
- Identify five cross-domain assumptions that need explicit validation.
- Write a decision memo where two domain priorities conflict.

#### Deliverables

- Cross-domain architecture map.
- Multi-domain threat model.
- Control conflict decision memo.
- Responsibility and evidence matrix.
- Cross-domain review checklist.

#### Read / Watch / Courses

- NIST CSF 2.0 as a common organizing model.
- ISO/IEC 27001 for governance context.
- CSA CCM, ISO/SAE 21434, IEC 62443, GSMA, and OWASP guidance as domain overlays.
- Case studies on connected vehicle, IoT, cloud, telecom, and public-sector incidents.

### Track X.2: AI, Cloud, Agents, And Data Pipelines

Goal: understand the intersection between AI systems and cloud platforms.

#### Learn

- Managed AI platforms concentrate model, data, identity, logging, supply-chain, GPU cost, and tenant-isolation risk.
- RAG systems depend on cloud storage, vector databases, identity permissions, document lifecycle, and data retention controls.
- Agentic systems can turn cloud permissions into deployments, API calls, ticket changes, email, database writes, and data movement.
- Cloud AI risks: model endpoint abuse, key leakage, prompt/response logging decisions, tenant separation, rate limits, GPU cost abuse, provider outage, and data residency.
- Legal/regulatory overlap: AI Act, GDPR, DORA, NIS2/Cybersäkerhetslagen, contracts, cloud supplier obligations, and public-sector records where AI supports official activity.

#### Practice

- Threat model a RAG system hosted in cloud with storage, vector database, model endpoint, and tool-using agent.
- Review IAM permissions for a managed AI workload.
- Create a rate-limit and budget-control plan for AI endpoints.
- Map AI logs and traces to privacy, records, and incident-response requirements.

#### Deliverables

- Cloud AI threat model.
- Managed AI IAM review.
- AI endpoint abuse and cost-control plan.
- RAG data lifecycle map.
- AI/cloud incident runbook.

#### Read / Watch / Courses

- Provider documentation for managed AI service security.
- OWASP LLM Top 10 and OWASP Agentic guidance.
- NIST AI RMF and CSA CCM.
- Microsoft, AWS, and Google AI security reference material.

### Track X.3: Connected Products, Cloud, OT, And Fleet Safety

Goal: understand connected products where device compromise, cloud compromise, or operational misuse can create physical-world impact.

#### Learn

- Modern vehicles, industrial devices, medical devices, and critical IoT products combine embedded security, cloud control planes, fleet identity, OTA, privacy, safety constraints, and sometimes OT interfaces.
- Device-to-cloud-to-operations attack paths: support account compromise, OTA signing compromise, fleet command abuse, telemetry manipulation, and remote maintenance misuse.
- Protocol and interface overlap: CAN, Ethernet, OPC UA, Modbus, MQTT, CoAP, cellular, Wi-Fi, BLE, diagnostics, and service tooling.
- Incident implications: unsafe state, fleet rollback, physical containment, customer communication, authority notification, supplier coordination, and safety case updates.
- Evidence alignment: product security evidence, safety evidence, OT segmentation evidence, cloud logs, supplier statements, and incident timelines.

#### Practice

- Build a combined device-cloud-operations architecture diagram.
- Map how a compromised cloud support account could affect devices or physical operations.
- Design segmentation and monitoring for device telemetry entering OT or enterprise networks.
- Run a tabletop where a firmware update causes unsafe or unavailable operation.

#### Deliverables

- Cyber-physical architecture diagram.
- Device-to-cloud-to-operations attack path map.
- Safety-aware incident response outline.
- OTA rollback and containment plan.
- Cross-domain evidence checklist.

#### Read / Watch / Courses

- NIST SP 800-82r3.
- IEC 62443 overview material.
- ISO/SAE 21434, CRA, and IoT security guidance.
- MITRE ATT&CK for ICS.
- Automotive, IoT, OT, and cloud case studies involving fleet interactions.

### Track X.4: Defence, Public Sector, Sovereign Cloud, And Supplier Chains

Goal: handle digital service decisions where defence, public-sector, cloud, sovereignty, and protective-security obligations overlap.

#### Learn

- Cloud use under säkerhetsskydd, public-sector procurement, OSL, outsourcing, support access, foreign ownership/control, supplier chains, telemetry, metadata, logs, backups, and administrative access.
- Sovereign cloud, dedicated regions, private cloud, and disconnected environments as design options, not labels that automatically solve risk.
- Public-sector specifics: offentlighetsprincipen, OSL, diarieföring, records retention, public procurement, political accountability, citizen-facing impact, and total defence.
- Defence-specific concerns: classification, NATO collaboration, KSF, COMSEC, TEMPEST, cross-domain solutions, and foreign intelligence threat.
- Civil preparedness: critical societal activity, sector-responsible authorities, crisis communication, resilience, and continuity.

#### Practice

- Evaluate a cloud or SaaS supplier for a public-sector or defence-adjacent workload.
- Draft an OSL and säkerhetsskydd applicability memo for a cloud-hosted service.
- Build a support-access and metadata risk analysis.
- Write exit, continuity, and incident-notification requirements for a contract.

#### Deliverables

- Cloud/säkerhetsskydd applicability memo.
- Public-sector cloud supplier risk assessment.
- Support-access and metadata threat model.
- Contractual security and exit requirements.
- Civil-preparedness continuity note.

#### Read / Watch / Courses

- OSL, LOU, LUFS, säkerhetsskyddslag, and säkerhetsskyddsförordning.
- MCF/MSB method support for information security.
- Kammarkollegiet procurement guidance.
- Säkerhetspolisen and Försvarsmakten open säkerhetsskydd guidance.
- Riksrevisionen reports on public-sector IT security.

### Track X.5: Telecom, Cloud Edge, IoT, And Critical Infrastructure

Goal: understand where connectivity, cloud edge, IoT fleets, private networks, and critical infrastructure depend on each other.

#### Learn

- Private 5G and cellular IoT can become part of industrial, automotive, public-safety, defence, and municipal service architectures.
- MEC and cloud edge concentrate network, compute, identity, routing, logging, physical access, and tenant-isolation risk close to critical operations.
- Connectivity failures can become safety, availability, public service, or crisis-management failures when systems assume network availability.
- Cross-domain responsibilities: operator, cloud provider, equipment vendor, integrator, application owner, public authority, and asset owner.
- Regulatory overlap: LEK, NIS2/Cybersäkerhetslagen, CER, CRA, GDPR/ePrivacy, public procurement, and säkerhetsskydd depending on scenario.

#### Practice

- Map a cellular IoT or private 5G deployment used by a critical infrastructure operator.
- Identify which controls belong to telecom, cloud, IoT, OT, and public-sector owners.
- Walk through a BGP, DNS, MEC, or operator outage affecting an IoT fleet.
- Write an incident coordination plan across operator, cloud provider, device vendor, and asset owner.

#### Deliverables

- Critical connectivity architecture map.
- Cross-domain responsibility matrix.
- Telecom/cloud/IoT outage scenario.
- Incident coordination plan.
- Regulatory overlap memo.

#### Read / Watch / Courses

- 3GPP, GSMA, ENISA 5G, CSA CCM, IEC 62443, and NIST SP 800-82 material.
- PTS and MSB/MCF guidance for electronic communications and critical services.
- Case studies on telecom outages, cloud edge incidents, IoT fleet compromise, and critical infrastructure disruptions.


## 4. Practice Portfolio

The portfolio turns the roadmap into evidence. Use it alongside the Core Curriculum and Specializations. You do not need every artifact at once; build them gradually.

### Foundation Package

- Asset inventory.
- Data classification model.
- Network diagram.
- Identity model.
- PKI and certificate validation note.
- Access control standard.
- Backup and restore evidence.
- Physical and environmental controls checklist.

### ISMS Package

- ISMS scope.
- Risk methodology.
- Risk register.
- Statement of Applicability.
- Management review agenda.
- Policy framework.
- Security program charter.
- Awareness and training plan.
- Personnel security checklist.
- Security investment business case.

### Cyber Defense Package

- Hardening baseline.
- Vulnerability management procedure.
- Logging source inventory.
- Detection coverage map.
- Backup and restore report.
- Incident response plan.
- Incident classification matrix.
- BIA and service dependency map.
- BCP/DRP outline.
- DR exercise plan.
- Investigation and evidence handling checklist.

### Cloud Security Package

- Cloud landing zone design.
- Shared responsibility matrix.
- Cloud IAM model.
- Cloud network segmentation design.
- Key management and encryption design.
- Logging and detection coverage map.
- Container/Kubernetes security checklist.
- SaaS security baseline.
- IaC guardrail and policy-as-code set.
- Cloud incident runbook.
- Cloud control mapping.

### Secure Engineering Package

- Threat model.
- Architecture review note.
- Cryptography decision record.
- Secure coding checklist.
- CI/CD security checklist.
- Dependency and SBOM process.
- Vulnerability disclosure policy.
- Software supply-chain risk assessment.

### Privacy And Regulation Package

- Data inventory.
- DPIA.
- ROPA.
- Breach notification matrix.
- NIS2/Cybersäkerhetslagen applicability memo.
- GDPR transfer assessment.
- CRA/AI Act/DORA relevance note.
- Asset and media handling standard.
- Decommissioning and secure destruction checklist.
- Control mapping to ISO/NIST/CIS.

### Säkerhetsskydd Package

- Säkerhetsskyddsanalys.
- Classification handling procedure.
- Security vetting process.
- SUA decision checklist.
- Supplier flow-down checklist.
- Security-sensitive outsourcing memo.

### Embedded/Product Package

- Embedded product threat model.
- Secure boot and update requirements.
- Manufacturing provisioning checklist.
- Firmware analysis report.
- End-of-life plan.

### AI/LLM/Agentic Package

- AI system inventory.
- LLM/RAG/agent threat model.
- Agent permission matrix.
- MCP/tool review checklist.
- AI red-team report.
- AI incident response addendum.

### Domain Package

- Defence supplier security plan.
- IoT security architecture and CRA mapping.
- Automotive TARA and ISO/SAE 21434 evidence checklist.
- Cloud-native product architecture and shared responsibility mapping.
- Cross-domain architecture memo.

## 5. Reference Library

Reference material supports the roadmap. It is not the main learning order. Use this section when you need the source standard, legal text, certification idea, book, community, or authority page.

### 5.1 Standards, Frameworks, And Regulations

#### Core Management And Controls

- ISO/IEC 27001: ISMS requirements.
- ISO/IEC 27002: control guidance.
- ISO/IEC 27005: information security risk management.
- ISO 31000: enterprise risk management.
- ISO 22301: business continuity.
- ISO/IEC 27701: privacy information management.
- ISO/IEC 29100: privacy framework.
- NIST CSF 2.0: Govern, Identify, Protect, Detect, Respond, Recover.
- NIST SP 800-53: security and privacy controls.
- CIS Critical Security Controls v8.1.
- COBIT and ITIL for governance and service management context.

#### Technical And Security Engineering

- CIS Benchmarks.
- OWASP Top 10, ASVS, SAMM, API Security Top 10, MASVS, LLM Top 10, Agentic guidance.
- MITRE ATT&CK, D3FEND, CAPEC, CWE.
- NIST SP 800-61r3.
- NIST SP 800-207 Zero Trust.
- NIST SP 800-218 SSDF.
- SLSA, in-toto, Sigstore, CycloneDX, SPDX.

#### Cloud, SaaS, And Platform Security

- CSA Cloud Controls Matrix.
- CSA Security, Trust, Assurance and Risk `(STAR)`.
- ISO/IEC 27017 for cloud security controls.
- ISO/IEC 27018 for protection of personal data in public cloud.
- ISO/IEC 22123 for cloud computing concepts and terminology.
- ISO/IEC 19941 for cloud interoperability and portability.
- NIST SP 800-144, 800-145, and 800-146 for public cloud security and cloud definitions.
- NIST SP 800-207 for Zero Trust architecture.
- CIS Benchmarks for AWS, Azure, Google Cloud, Kubernetes, Linux, Windows, and containers.
- AWS Well-Architected Security Pillar.
- Microsoft Cloud Security Benchmark and Azure security architecture guidance.
- Google Cloud security foundations and security blueprints.
- Kubernetes security documentation.
- OWASP Kubernetes Top 10.
- SOC 2 and ISAE 3402 / SOC assurance reports for supplier assurance context.
- EUCS and national cloud assurance schemes where relevant.

#### Embedded, IoT, And Product Security

- IEC/ISA 62443.
- Common Criteria / ISO/IEC 15408.
- FIPS 140-3.
- PSA Certified.
- SESIP.
- EUCC and EUCS.
- TCG TPM 2.0.
- Trusted Firmware-M.
- MCUboot.
- NIST FIPS 203/204/205 for PQC.
- NIST SP 800-208 for stateful hash-based signatures.
- NIST lightweight cryptography / Ascon.
- ETSI EN 303 645.
- EN 18031 series.
- NISTIR 8259 and 8425.
- ISO/IEC 27400, 27402, 27404.

#### Automotive

- ISO/SAE 21434.
- ISO 24089.
- ISO 26262.
- ISO 21448 SOTIF.
- UN R155 and R156.
- ISO/PAS 5112.
- ISO/SAE 8475.
- AUTOSAR Classic and Adaptive security.

#### AI

- ISO/IEC 42001.
- ISO/IEC 23894.
- NIST AI RMF 1.0.
- NIST Generative AI Profile.
- NIST adversarial ML taxonomy.
- MITRE ATLAS.
- OWASP Top 10 for LLM Applications.
- OWASP Top 10 for Agentic Applications.
- OWASP Agentic Skills Top 10.
- ENISA AI security guidance.
- EU AI Act.

#### Swedish And Defence

- Cybersäkerhetslag `(2025:1506)`.
- Cybersäkerhetsförordning `(2025:1507)`.
- Säkerhetsskyddslag `(2018:585)`.
- Säkerhetsskyddsförordning `(2021:955)`.
- PMFS 2022:1.
- Försvarsmakten föreskrifter.
- KSF v3.1.
- NATO Security Policy and industrial security documents.
- CCRA, SOG-IS, CSEC, EUCC.

### 5.2 Certifications, Books, Communities, And Current Awareness

#### Certifications By Track

Use certifications as study scaffolding, not as the goal.

##### Foundation

- CompTIA Security+.
- ISC2 Certified in Cybersecurity.

##### Management, Governance, Audit

- CISSP.
- CISM.
- CISA.
- CRISC.
- ISO/IEC 27001 Lead Implementer / Lead Auditor.
- CGRC.

##### Defensive Technical

- GIAC GSEC, GCIH, GCIA, GMON, GCFA, GCFE.
- Blue Team Level 1 / 2.

##### Offensive

- OSCP.
- OSEP, OSWE, OSED.
- GPEN, GXPN, GWAPT.
- PNPT.

##### Cloud

- CCSP.
- CCSK.
- AWS Security Specialty.
- Azure SC-100, SC-200, AZ-500.
- GCP Professional Cloud Security Engineer.

##### Privacy

- CIPP/E.
- CIPM.
- CIPT.

##### Sweden-Specific Learning

- Säpo vägledningar.
- MCF/MSB method support and training.
- Försvarshögskolan and reputable säkerhetsskydd training.
- KSF and defence-sector training where relevant.

#### Books And Long-Form Sources

##### General Security

- Ross Anderson: Security Engineering.
- Google: Building Secure and Reliable Systems.
- Ferguson, Schneier, Kohno: Cryptography Engineering.
- Adam Shostack: Threat Modeling.
- Hubbard and Seiersen: How to Measure Anything in Cybersecurity Risk.
- Kim Zetter: Countdown to Zero Day.
- Andy Greenberg: Sandworm.

##### Cloud

- CSA cloud security guidance.
- Provider security reference architectures and well-architected frameworks.
- Kubernetes security documentation.
- CNCF cloud-native security papers.
- SRE and resilience literature for operational reliability context.

##### Embedded / IoT

- The Hardware Hacking Handbook.
- Practical IoT Hacking.
- The IoT Hacker's Handbook.
- Embedded Software Development for Safety-Critical Systems.

##### AI

- Generative AI Security.
- Securing AI Agents.
- AI Snake Oil.
- The Alignment Problem.
- The Algorithmic Foundations of Differential Privacy.

##### Automotive

- The Car Hacker's Handbook.
- Practical Vehicle Cybersecurity.

##### Swedish / Defence

- Säpo vägledning series.
- MCF/MSB method support.
- Försvarsmakten open publications where available.
- FOI publications.
- Tallinn Manual 2.0 for international law in cyberspace context.

#### Communities And Conferences

- SecurityFest.
- Internetdagarna.
- Sektor3:1.
- OWASP chapters.
- ISACA Sweden Chapter.
- FIRST and CERT communities.
- Cloud Security Alliance.
- CNCF and Kubernetes security communities.
- Hardwear.io.
- DEF CON Hardware Hacking Village, IoT Village, AI Village, Car Hacking Village.
- CHES.
- Embedded World.
- escar Europe.
- Auto-ISAC.
- AI Sweden events.
- FOLK och FÖRSVAR.
- SOFF groups.

#### Current Awareness

Track:

- CERT-SE.
- MCF/MSB.
- NCSC Sweden.
- IMY.
- Säkerhetspolisen annual reports.
- PTS.
- Finansinspektionen.
- ENISA.
- CISA KEV and advisories.
- Mandiant, Microsoft Threat Intelligence, Talos, Unit 42, Truesec.
- Risky Business, SANS NewsBites, Krebs on Security, Bruce Schneier.

### 5.3 Key Official Sources

#### Swedish Sources

- MCF/MSB method support for systematic information security work: https://www.msb.se/sv/amnesomraden/informationssakerhet-cybersakerhet-och-sakra-kommunikationer/arbeta-systematiskt-informationssakerhet-och-cybersakerhet/metodstod-for-informationssakerhetsarbete/
- MCF/MSB information security management system guidance: https://www.msb.se/sv/amnesomraden/informationssakerhet-cybersakerhet-och-sakra-kommunikationer/arbeta-systematiskt-informationssakerhet-och-cybersakerhet/ledningssystem-for-informationssakerhet-lis/
- MSB/MCF name change: https://www.msb.se/sv/om-msb/vart-uppdrag/myndigheten-for-civilt-forsvar/
- Swedish Cybersäkerhetslag `(2025:1506)`: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/cybersakerhetslag-20251506_sfs-2025-1506/
- Swedish Cybersäkerhetsförordning `(2025:1507)`: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/_sfs-2025-1507/
- PTS incident reporting under cybersäkerhetslagen: https://pts.se/sakerhet-och-integritet/cybersakerhetslagen/incidentrapportera-enligt-cybersakerhetslagen/
- Swedish Säkerhetsskyddslag `(2018:585)`: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sakerhetsskyddslag-2018585_sfs-2018-585/
- Swedish Säkerhetsskyddsförordning `(2021:955)`: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sakerhetsskyddsforordning-2021955_sfs-2021-955/
- Säkerhetspolisen on säkerhetsskyddsanalys: https://sakerhetspolisen.se/sakerhetsskydd/sakerhetsskyddsanalys.html
- IMY personal data incidents: https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/personuppgiftsincidenter/
- CERT-SE: https://www.cert.se/
- NCSC Sweden: https://www.ncsc.se/
- Finansinspektionen on DORA: https://finansinspektionen.se/sv/marknad/it-risker-dora/om-dora/
- PTS on LEK: https://pts.se/internet-och-telefoni/regler-vi-arbetar-efter/lek--lagen-om-elektronisk-kommunikation/
- Försvarsmakten on säkerhetsskydd: https://www.forsvarsmakten.se/om-forsvarsmakten/organisation/gemensamma/must/sakerhetsskydd/
- ISP krigsmateriel: https://www.isp.se/krigsmateriel
- ISP dual-use products: https://www.isp.se/produkter-med-dubbla-anvandningsomraden

#### EU Sources

- European Commission NIS2 overview: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive
- EUR-Lex NIS2: https://eur-lex.europa.eu/legal-content/en/LSU/?uri=CELEX%3A32022L2555
- EUR-Lex CER Directive `(EU) 2022/2557`: https://eur-lex.europa.eu/eli/dir/2022/2557/oj
- European Commission Cyber Resilience Act summary: https://digital-strategy.ec.europa.eu/en/policies/cra-summary
- CRA reporting obligations: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
- EUR-Lex Cyber Resilience Act `(EU) 2024/2847`: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- ENISA Cybersecurity Act certification context: https://certification.enisa.europa.eu/about-eu-certification/eu-regulatory-context/cybersecurity-act_en
- ESMA DORA overview: https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/digital-operational-resilience-act-dora
- EUR-Lex eIDAS amendment `(EU) 2024/1183`: https://eur-lex.europa.eu/eli/reg/2024/1183
- EUR-Lex AI Act `(EU) 2024/1689`: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- EUR-Lex Radio Equipment Directive delegated cybersecurity regulation `(EU) 2022/30`: https://eur-lex.europa.eu/eli/reg_del/2022/30/oj
- EU Cyber Solidarity Act: https://digital-strategy.ec.europa.eu/en/policies/cyber-solidarity

#### Standards And Framework Sources

- ISO/IEC 27001:2022: https://www.iso.org/standard/27001
- ISO/IEC 27002:2022: https://www.iso.org/standard/75652.html
- ISO/IEC 27005:2022: https://www.iso.org/standard/80585.html
- ISO 31000:2018: https://www.iso.org/standard/65694.html
- ISO 22301:2019: https://www.iso.org/standard/75106.html
- ISO/IEC 27701:2025: https://www.iso.org/standard/27701
- ISO/IEC 42001:2023: https://www.iso.org/standard/42001
- ISO/SAE 21434:2021: https://www.iso.org/standard/70918.html
- ISO 24089:2023: https://www.iso.org/standard/77796.html
- ISO 26262: https://www.iso.org/publication/PUB200262.html
- NIST Cybersecurity Framework 2.0: https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20
- NIST SP 800-53 Rev. 5: https://csrc.nist.gov/Pubs/sp/800/53/r5/upd1/Final
- NIST SP 800-61r3: https://www.nist.gov/news-events/news/2025/04/nist-revises-sp-800-61-incident-response-recommendations-and-considerations
- NIST SP 800-207 Zero Trust Architecture: https://csrc.nist.gov/publications/detail/sp/800-207/final
- NIST AI RMF 1.0: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10
- NISTIR 8259 Rev. 1: https://csrc.nist.gov/pubs/ir/8259/r1/final
- CSA Cloud Controls Matrix: https://cloudsecurityalliance.org/research/cloud-controls-matrix
- CSA STAR: https://cloudsecurityalliance.org/star
- CIS Critical Security Controls v8.1: https://www.cisecurity.org/controls/v8-1
- CIS Benchmarks: https://www.cisecurity.org/cis-benchmarks
- Kubernetes security documentation: https://kubernetes.io/docs/concepts/security/
- OWASP Top 10: https://owasp.org/Top10/
- OWASP LLM Top 10: https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/
- OWASP Agentic AI guidance: https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/
- OWASP Agentic Applications Top 10: https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/
- OWASP Agentic Skills Top 10: https://owasp.org/www-project-agentic-skills-top-10/
- MITRE ATT&CK: https://attack.mitre.org/
- MITRE ATLAS: https://atlas.mitre.org/
- MITRE CWE Top 25: https://cwe.mitre.org/top25/
- SEI CERT C Coding Standard: https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/
- SEI CERT C++ Coding Standard: https://cmu-sei.github.io/secure-coding-standards/sei-cert-cpp-coding-standard/
- ISA/IEC 62443: https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards
- ETSI EN 303 645 announcement: https://www.etsi.org/newsroom/press-releases/1789-2020-06-etsi-releases-world-leading-consumer-iot-security-standard
- UNECE Regulation No. 155: https://eur-lex.europa.eu/eli/reg/2021/387/oj/eng
- UNECE Regulation No. 156: https://eur-lex.europa.eu/eli/reg/2021/388/oj/eng
