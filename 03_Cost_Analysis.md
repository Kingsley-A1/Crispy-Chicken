# Crispy Chicken Digital — Cost Analysis & Investment Breakdown

**Prepared by:** VortexPOS Digital Solutions  
**Prepared for:** The CEO, Crispy Chicken Calabar  
**Date:** April 12, 2026  
**Currency:** Nigerian Naira (₦), with USD equivalents at ₦1,600/$1

---

## EXECUTIVE COST SUMMARY

| Item | Cost (₦) |
|------|-------:|
| **Total Platform Build Cost** | **₦3,200,000 — ₦4,000,000** |
| **Monthly Operating Cost** | **₦85,000 — ₦140,000/mo** |
| **Time to Launch** | **8-10 weeks** |
| **Expected ROI Timeline** | **3-5 months post-launch** |

> This is a **fixed-price engagement** — no hourly billing surprises. You know exactly what you're paying before we start.

---

## 1. PLATFORM DEVELOPMENT COST

### What's Included in the Build

| Deliverable | Description | Cost (₦) |
|-------------|------------|-------:|
| **Customer-Facing PWA** | Full ordering website — menu browsing, cart, checkout, order tracking, ratings. Installable on any phone. Responsive on all screen sizes. | ₦1,000,000 |
| **Branch Manager Portal** | Real-time order queue, order status management, daily reports, stock availability toggle. One portal per branch. | ₦600,000 |
| **CEO Command Center** | Multi-branch dashboard with live revenue, order volume, performance metrics, menu management, staff management. | ₦700,000 |
| **WhatsApp Delivery Integration** | Automated order notifications to delivery riders via WhatsApp Business API. Structured messages with order details, customer info, and address. | ₦300,000 |
| **Backend API + Database** | CockroachDB schema, API routes, authentication system, role-based access control, notification engine. | ₦400,000 |
| **UI/UX Design** | Branded design system matching Crispy Chicken's identity. Menu photography layout, mobile-first design, accessibility. | ₦200,000 |
| | **SUBTOTAL** | **₦3,200,000** |

### Optional Add-ons (Can Be Added Post-Launch)

| Add-on | Description | Cost (₦) |
|--------|------------|-------:|
| Customer loyalty program | "Order 10, get 1 free" — automated tracking and redemption | ₦250,000 |
| SMS order notifications | Customer gets SMS updates (for customers without WhatsApp) | ₦150,000 |
| Advanced analytics dashboard | Trend analysis, forecasting, customer segmentation charts | ₦300,000 |
| Promotional system | Coupon codes, flash sales, happy hour pricing | ₦200,000 |
| Receipt/Invoice PDF generation | Downloadable receipts for customers and accounting | ₦100,000 |

---

## 2. MONTHLY OPERATING COSTS

These are the recurring costs to keep the platform running after launch.

### 2.1 Infrastructure & Hosting

| Service | Purpose | Monthly Cost (₦) |
|---------|---------|------------------:|
| **Vercel Pro** | Hosting the website + API (auto-scales during peak hours) | ₦32,000 |
| **CockroachDB Serverless** | Database (free tier covers up to 50M request units/mo — more than enough for the first 12+ months) | ₦0 — ₦16,000 |
| **Cloudflare R2** | Storing menu images (free tier: 10GB storage, 10M reads/mo) | ₦0 — ₦8,000 |
| **Domain Name** (crispychicken.com.ng) | .com.ng domain registration | ₦5,000/year |
| **SSL Certificate** | Auto-included with Vercel — free | ₦0 |
| **Subtotal** | | **₦32,000 — ₦56,000/mo** |

> **Note:** CockroachDB and Cloudflare R2 both offer generous free tiers. For the first 6-12 months, infrastructure could cost as little as ₦37,000/month.

### 2.2 Third-Party Services

| Service | Purpose | Monthly Cost (₦) |
|---------|---------|------------------:|
| **WhatsApp Business API** (via provider like Twilio or 360dialog) | Automated delivery notifications. ~₦15-25 per message. At ~500 deliveries/month: | ₦7,500 — ₦12,500 |
| **Email Service** (Resend or Mailgun) | Order confirmations, reports to CEO | ₦0 — ₦8,000 |
| **Uptime Monitoring** (BetterUptime or UptimeRobot) | Alert if the website goes down | ₦0 (free tier) |
| **Error Tracking** (Sentry) | Catch and fix bugs before customers notice | ₦0 (free tier) |
| **Subtotal** | | **₦7,500 — ₦20,500/mo** |

### 2.3 Support & Maintenance

| Item | Description | Monthly Cost (₦) |
|------|------------|------------------:|
| **Technical Support** | Bug fixes, server monitoring, minor updates (10 hours/month included) | ₦40,000 — ₦60,000 |
| **Feature Updates** | New features, improvements (billed separately as needed) | As quoted |
| **Subtotal** | | **₦40,000 — ₦60,000/mo** |

### 📊 TOTAL MONTHLY OPERATING COST

| Category | Low Estimate (₦) | High Estimate (₦) |
|----------|------------------:|-------------------:|
| Infrastructure | ₦32,000 | ₦56,000 |
| Third-Party Services | ₦7,500 | ₦20,500 |
| Support & Maintenance | ₦40,000 | ₦60,000 |
| **TOTAL** | **₦79,500/mo** | **₦136,500/mo** |

> **To put this in perspective:** This is the cost of approximately **15-25 Crispy Chicken combo meals per month** to run a digital platform that could generate **200-500+ additional orders per month.**

---

## 3. WHAT YOU GET — FULL DELIVERABLES LIST

| # | Deliverable | Format |
|:-:|-------------|--------|
| 1 | Customer-facing ordering website (PWA) | Live at crispychicken.com.ng |
| 2 | Branch Manager order management portal | Web app — accessible on any device |
| 3 | CEO multi-branch command center dashboard | Web app — desktop + mobile optimized |
| 4 | WhatsApp delivery notification integration | Automated via WhatsApp Business API |
| 5 | CockroachDB database with full schema | Deployed + managed |
| 6 | Cloudflare R2 image storage bucket | Configured + connected |
| 7 | All 5 branches configured in the system | Ready to receive orders |
| 8 | Complete menu data entry (all items, prices, images) | Populated and verified |
| 9 | Staff accounts created (CEO + 5 managers + kitchen staff) | Credentials delivered |
| 10 | Staff training session (virtual or in-person) | 2-hour training for managers + CEO |
| 11 | 30-day post-launch support | Bug fixes + guidance included |
| 12 | Technical documentation | For your team's reference |

---

## 4. DEVELOPMENT TIMELINE

| Week | Phase | Deliverables |
|:----:|-------|-------------|
| **1** | Discovery & Design | Finalize menu data, brand assets, branch details. UI/UX mockups presented and approved. |
| **2-3** | Customer PWA | Menu browsing, cart, checkout, payment flow, order tracking, ratings — all functional. |
| **4-5** | Branch Manager Portal | Order queue, status management, daily reports — connected to live order data. |
| **6** | CEO Dashboard | Multi-branch overview, revenue analytics, menu management, staff management. |
| **7** | Integrations | WhatsApp delivery notifications, Cloudflare R2 image pipeline, branch routing logic. |
| **8** | Testing & QA | End-to-end testing, all 5 branches configured, performance optimization, security review. |
| **9** | Launch Prep | Menu data entry, staff account setup, training session, domain configuration. |
| **10** | Go Live + Support | Soft launch → monitor → fix → full launch. 30-day active support begins. |

---

## 5. RETURN ON INVESTMENT (ROI) ANALYSIS

### Revenue Projection — Conservative Estimate

| Month Post-Launch | Online Orders/Week (All Branches) | Avg Order Value (₦) | Monthly Online Revenue (₦) |
|:-:|:-:|--:|--:|
| 1 | 30-50 | ₦3,500 | ₦420,000 — ₦700,000 |
| 3 | 80-120 | ₦3,800 | ₦1,216,000 — ₦1,824,000 |
| 6 | 150-250 | ₦4,000 | ₦2,400,000 — ₦4,000,000 |
| 12 | 300-500 | ₦4,200 | ₦5,040,000 — ₦8,400,000 |

### Break-Even Calculation

| Metric | Value |
|--------|-------|
| Total investment (build) | ₦3,200,000 |
| Monthly operating cost (avg) | ₦110,000 |
| Monthly online revenue (Month 3 avg) | ₦1,500,000 |
| Gross margin on food (estimated) | 55-65% |
| Monthly gross profit from online (Month 3) | ₦825,000 — ₦975,000 |
| **Months to recover full investment** | **~3-5 months** |

> **By Month 6, the platform should be generating ₦1.3M — ₦2.6M in monthly gross profit from online orders alone** — this is pure incremental revenue that currently does not exist.

---

## 6. COST CONTEXT — How This Compares

### What Other Businesses Pay

| Solution | Typical Cost | What You Get | Hidden Costs |
|----------|-------------|-------------|--------------|
| **Third-party platform** (Glovo, Chowdeck, Jollivry) | "Free" to join | Listed on their marketplace | 15-25% commission per order. At ₦4M/mo revenue = ₦600K-1M/mo lost. No customer data. Competitors listed next to you. |
| **Template website** (Wix, Squarespace) | ₦100K-300K | Basic website | No order management. No branch system. No delivery integration. Looks generic. |
| **Overseas agency** | ₦8M-15M+ | Custom platform | 3-6 month timeline. Timezone issues. No local market understanding. Ongoing support expensive. |
| **This proposal** | **₦3.2M** | **Full custom platform, branded, 5-branch, delivery-integrated, CEO dashboard** | **₦80-140K/mo operating. 30-day free support. Local team. Built for YOUR workflow.** |

### Social Proof — Platform Costs in the Real World

| Platform Type | Industry Benchmark Cost | Source |
|--------------|----------------------|--------|
| Custom restaurant ordering system | $3,000 - $15,000 (₦4.8M - ₦24M) | Upwork / Clutch.co marketplace data |
| Multi-restaurant management SaaS | $5,000 - $25,000 (₦8M - ₦40M) | SaaS industry benchmarks (2025) |
| Shopify-equivalent food platform | $2,000 - $8,000 (₦3.2M - ₦12.8M) | E-commerce development surveys |
| **This proposal** | **₦3.2M (~$2,000)** | **Below market rate — strategic pricing for a flagship partnership** |

> We are pricing this engagement **below market rate** because we believe in the opportunity. A successful deployment at Crispy Chicken becomes our flagship case study in Calabar — proof that our platform works in real restaurant operations at scale.

---

## 7. PAYMENT STRUCTURE

We propose the following payment milestone structure:

| Milestone | Trigger | Amount (₦) | % |
|-----------|---------|----------:|:-:|
| **Deposit** | Project kickoff approval | ₦960,000 | 30% |
| **Milestone 1** | Customer PWA completed and approved | ₦800,000 | 25% |
| **Milestone 2** | Manager Portal + CEO Dashboard completed | ₦800,000 | 25% |
| **Final Payment** | Full launch + training completed | ₦640,000 | 20% |
| **TOTAL** | | **₦3,200,000** | 100% |

> **You pay only when milestones are delivered and approved.** No advance payment beyond the deposit. Full transparency at every step.

---

## 8. WHAT'S NOT INCLUDED (Transparency)

To keep costs moderate and scope clear, the following are **not included** in this engagement but can be quoted separately:

| Item | Why It's Excluded | Can Add Later? |
|------|-------------------|:-:|
| Mobile app (native iOS/Android) | PWA covers 95% of use cases without app store costs | ✅ |
| Payment gateway integration (Paystack/Flutterwave) | Can start with transfer + pay-on-delivery. Gateway added when volume justifies fees. | ✅ |
| AI-powered analytics | Requires 6+ months of data to be useful | ✅ |
| Inventory management system | Complex feature better added after core operations are stable | ✅ |
| Customer mobile app push notifications | PWA notifications cover this; native push is a mobile app feature | ✅ |
| Multi-language support | Not needed for Calabar market currently | ✅ |

---

## 9. RISK MITIGATION — OUR COMMITMENT

| Risk | Our Mitigation |
|------|---------------|
| "What if the platform goes down?" | Vercel provides 99.99% uptime. CockroachDB is distributed — if one node fails, data is safe. We include monitoring + alerts. |
| "What if we need changes after launch?" | 30-day support included. Ongoing maintenance packages available. |
| "What if customers don't use it?" | We provide a launch marketing guide + QR code materials for in-branch promotion. Digital adoption is a process — we'll guide you through it. |
| "What if we add more branches?" | The system is built for scale. Adding Branch 6, 7, or 8 is a simple configuration — not a rebuild. |
| "What if we're not happy with the design?" | Design is approved before any code is written. You see and approve mockups in Week 1. |

---

## 10. WHY PARTNER WITH US

| Factor | Our Advantage |
|--------|--------------|
| **Local Understanding** | We understand Calabar's market, infrastructure challenges, and consumer behavior. |
| **Technology Excellence** | We use the same stack trusted by Netflix, DoorDash, and Vercel's own enterprise clients. |
| **Restaurant Domain Expertise** | We are building VortexPOS — a comprehensive restaurant operating system. Your platform benefits from our deep domain knowledge. |
| **Speed of Execution** | 8-10 weeks from approval to launch. No 6-month agency timelines. |
| **Post-Launch Partnership** | We don't disappear after launch. Ongoing support, optimization, and feature development as your business grows. |

---

## THE BOTTOM LINE

| | |
|---|---|
| **Build Cost** | ₦3,200,000 (one-time) |
| **Monthly Cost** | ₦80,000 — ₦140,000 |
| **Expected Monthly Revenue from Platform (Month 6)** | ₦2,400,000 — ₦4,000,000 |
| **Break-Even** | ~3-5 months |
| **Strategic Value** | First digitally-native fast-food brand in Calabar |

> *The question isn't whether Crispy Chicken can afford to build this platform. The question is whether Crispy Chicken can afford NOT to — while competitors start exploring the same opportunity.*

---

<div align="center">

**VortexPOS Digital Solutions**  
*Building the future of restaurant operations in Africa.*  

📧 contact@vortexpos.com | 📱 +234 XXX XXX XXXX  

*This proposal is valid for 30 days from the date of issue.*

</div>
