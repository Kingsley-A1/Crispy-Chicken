# Crispy Chicken Digital — System Architecture & Visual Blueprint

**Prepared by:** VortexPOS Digital Solutions  
**Prepared for:** The CEO, Crispy Chicken Calabar  
**Date:** April 12, 2026  
**Purpose:** Visual representation of how the platform works end-to-end

---

## 1. THE COMPLETE SYSTEM — Bird's Eye View

This diagram shows every component of the Crispy Chicken Digital platform and how they connect.

```mermaid
graph TB
    subgraph CUSTOMERS["🍗 CUSTOMER EXPERIENCE"]
        direction TB
        CW["📱 Customer opens<br/>crispychicken.com.ng<br/>(PWA — No App Download)"]
        CM["📋 Browses Menu<br/>Photos, Prices, Categories"]
        CC["🛒 Builds Cart<br/>Customize Items + Add-ons"]
        CB["📍 Selects Branch<br/>Auto-detect nearest or manual"]
        CD["🚗 Pickup or Delivery<br/>Choose fulfillment method"]
        CP["💳 Pays<br/>Card / Transfer / Pay-on-Delivery"]
        CT["📊 Tracks Order<br/>Preparing → Ready → Delivered"]
        CR["⭐ Rates Experience<br/>1-5 Stars + Comment"]
    end

    subgraph BACKEND["⚙️ THE ENGINE — Backend Services"]
        direction TB
        API["🔌 API Server<br/>Next.js API Routes"]
        AUTH["🔐 Auth System<br/>JWT + Role-Based Access"]
        OMS["📋 Order Management<br/>Create → Route → Track → Complete"]
        NTF["📨 Notification Engine<br/>WhatsApp Business API"]
        MENU["🍔 Menu Management<br/>Items, Prices, Categories, Images"]
        RPT["📊 Reports Engine<br/>Revenue, Orders, Performance"]
    end

    subgraph DATA["💾 DATA LAYER"]
        direction TB
        CRDB["🪳 CockroachDB<br/>Orders, Users, Branches, Inventory"]
        R2["☁️ Cloudflare R2<br/>Menu Images, Receipts"]
    end

    subgraph BRANCH_OPS["🏪 BRANCH OPERATIONS"]
        direction TB
        BM1["📋 Branch 1 Manager<br/>Order Queue + Dashboard"]
        BM2["📋 Branch 2 Manager<br/>Order Queue + Dashboard"]
        BM3["📋 Branch 3 Manager<br/>Order Queue + Dashboard"]
        BM4["📋 Branch 4 Manager<br/>Order Queue + Dashboard"]
        BM5["📋 Branch 5 Manager<br/>Order Queue + Dashboard"]
        KITCHEN["🍳 Kitchen Staff<br/>Prep + Mark Ready"]
    end

    subgraph DELIVERY["🚴 DELIVERY"]
        direction TB
        WA["📱 WhatsApp Alert<br/>Order # + Items + Address"]
        RIDER["🏍️ Delivery Rider<br/>Picks up + Delivers"]
    end

    subgraph CEO_HQ["👔 CEO COMMAND CENTER"]
        direction TB
        DASH["📊 Live Dashboard<br/>All 5 Branches — Real-time"]
        REV["💰 Revenue Analytics<br/>Daily / Weekly / Monthly"]
        PERF["📈 Branch Performance<br/>Compare + Rank"]
        MENUMGMT["🍔 Menu Control<br/>Update All Branches Instantly"]
        STAFF["👥 Staff Management<br/>Roles + Access + Activity"]
    end

    CW --> CM --> CC --> CB --> CD --> CP --> CT --> CR

    CP -->|"Order Created"| API
    API --> AUTH
    API --> OMS
    API --> MENU
    OMS --> CRDB
    MENU --> R2

    OMS -->|"Route to Branch"| BM1 & BM2 & BM3 & BM4 & BM5
    BM1 & BM2 & BM3 & BM4 & BM5 --> KITCHEN

    OMS -->|"If Delivery"| NTF
    NTF -->|"WhatsApp Notification"| WA
    WA --> RIDER
    RIDER -->|"Delivery Confirmed"| OMS

    OMS -->|"Status Update"| CT

    RPT --> DASH & REV & PERF
    OMS --> RPT
    CRDB --> RPT
    API --> MENUMGMT
    API --> STAFF

    KITCHEN -->|"Order Ready"| OMS

    CR -->|"Rating Data"| CRDB

    style CUSTOMERS fill:#e17055,stroke:#fff,stroke-width:2px,color:#fff
    style BACKEND fill:#0984e3,stroke:#fff,stroke-width:2px,color:#fff
    style DATA fill:#6c5ce7,stroke:#fff,stroke-width:2px,color:#fff
    style BRANCH_OPS fill:#00b894,stroke:#fff,stroke-width:2px,color:#fff
    style DELIVERY fill:#fdcb6e,stroke:#2d3436,stroke-width:2px,color:#2d3436
    style CEO_HQ fill:#d63031,stroke:#fff,stroke-width:2px,color:#fff
```

---

## 2. THE ORDER JOURNEY — Step by Step

This shows exactly what happens from the moment a customer places an order to when the CEO sees it in the dashboard.

```mermaid
sequenceDiagram
    participant C as 🍗 Customer
    participant PWA as 📱 Website (PWA)
    participant API as ⚙️ Backend Server
    participant DB as 💾 CockroachDB
    participant BM as 📋 Branch Manager
    participant K as 🍳 Kitchen
    participant WA as 📱 WhatsApp API
    participant R as 🏍️ Delivery Rider
    participant CEO as 👔 CEO Dashboard

    C->>PWA: Opens crispychicken.com.ng
    PWA->>API: Load menu for nearest branch
    API->>DB: Fetch menu items + prices
    DB-->>API: Menu data + images from R2
    API-->>PWA: Display menu

    C->>PWA: Adds 2x Crispy Chicken + 1x Shawarma + 1x Drink
    C->>PWA: Selects "Delivery" to Ikot Eyo
    C->>PWA: Pays ₦5,200 via bank transfer

    PWA->>API: POST /orders (items, branch, address, payment)
    API->>DB: Save order #CC-0847
    API-->>PWA: ✅ Order confirmed!

    Note over PWA,C: Customer sees:<br/>"Your order has been placed!<br/>Preparing your food..."

    API->>BM: 🔔 New Order Alert (real-time)
    activate BM
    BM->>BM: Reviews order details
    BM->>K: Sends to kitchen for preparation
    activate K

    API->>WA: Send delivery notification
    WA->>R: 📱 "New delivery from Crispy Chicken Branch 1<br/>Order #CC-0847<br/>2x Crispy Chicken, 1x Shawarma, 1x Drink<br/>Deliver to: 14 Ikot Eyo Street<br/>Customer: Ada (08X XXX XXXX)<br/>Payment: Paid ✅<br/>ETA: 15 mins"

    K->>BM: ✅ Food is ready
    deactivate K
    BM->>API: Mark order "Ready for Pickup"
    deactivate BM
    API-->>PWA: Status update: "Your food is ready!"

    R->>BM: Arrives at branch, picks up order
    BM->>API: Mark order "Out for Delivery"
    API-->>PWA: Status update: "Your order is on the way! 🏍️"

    R->>C: Delivers food
    R->>API: Confirm delivery
    API->>DB: Mark order "Delivered"
    API-->>PWA: Status update: "Delivered! ✅ Enjoy your meal!"

    C->>PWA: Rates experience ⭐⭐⭐⭐⭐
    PWA->>API: Save rating
    API->>DB: Store feedback

    Note over CEO: ALL of this is visible<br/>in real-time on the<br/>CEO Dashboard

    API-->>CEO: 📊 Revenue +₦5,200<br/>📈 Orders today: 47<br/>⭐ Avg rating: 4.6
```

---

## 3. THE CEO's VIEW — What You See

This shows the information layers available to you at any moment.

```mermaid
graph LR
    subgraph CEO_DASHBOARD["👔 CEO COMMAND CENTER — Single Screen"]
        direction TB

        subgraph LIVE["🔴 LIVE — Right Now"]
            L1["Active Orders: 12"]
            L2["Orders Being Prepared: 7"]
            L3["Being Delivered: 3"]
            L4["Completed Today: 47"]
        end

        subgraph REVENUE["💰 REVENUE — Today"]
            R1["Branch 1 — Effio-Ette: ₦185,000"]
            R2["Branch 2 — Mary Slessor: ₦142,000"]
            R3["Branch 3 — Marian: ₦98,000"]
            R4["Branch 4 — Ekpo Abasi: ₦121,000"]
            R5["Branch 5 — Parliamentary: ₦76,000"]
            RT["TOTAL TODAY: ₦622,000"]
        end

        subgraph PERF["📊 PERFORMANCE"]
            P1["Avg Prep Time: 12 min"]
            P2["Avg Delivery: 28 min"]
            P3["Customer Rating: 4.6 / 5"]
            P4["Top Item: Crispy Chicken (134 sold)"]
        end

        subgraph CONTROLS["⚙️ CONTROLS"]
            C1["✏️ Update Menu + Prices<br/>(applies to all branches)"]
            C2["👥 Manage Staff Accounts<br/>(grant / revoke access)"]
            C3["📊 Download Reports<br/>(daily / weekly / monthly)"]
            C4["🔔 Set Alerts<br/>(low stock, bad reviews, etc.)"]
        end
    end

    style CEO_DASHBOARD fill:#1a1a2e,stroke:#e94560,stroke-width:3px,color:#fff
    style LIVE fill:#00b894,color:#fff
    style REVENUE fill:#0984e3,color:#fff
    style PERF fill:#6c5ce7,color:#fff
    style CONTROLS fill:#e17055,color:#fff
```

---

## 4. ROLE-BASED ACCESS — Who Sees What

Every person in the system has precisely the access they need — nothing more, nothing less.

```mermaid
graph TD
    subgraph ROLES["🔐 ACCESS HIERARCHY"]
        CEO["👔 CEO<br/>Full System Access"]
        MGR["📋 Branch Manager<br/>Own Branch Only"]
        STAFF["🍳 Kitchen Staff<br/>Orders Only"]
        CUST["🍗 Customer<br/>Menu + Own Orders"]
    end

    subgraph CEO_ACCESS["CEO Can:"]
        CA1["View all 5 branch dashboards"]
        CA2["Update menu and prices globally"]
        CA3["Add/remove staff across all branches"]
        CA4["View all revenue and financial reports"]
        CA5["See all customer feedback and ratings"]
        CA6["Configure delivery zones and fees"]
        CA7["Enable/disable branches temporarily"]
    end

    subgraph MGR_ACCESS["Branch Manager Can:"]
        MA1["View and manage own branch orders"]
        MA2["Mark orders as preparing/ready"]
        MA3["View own branch daily reports"]
        MA4["See own branch customer feedback"]
        MA5["Update item availability for own branch"]
    end

    subgraph STAFF_ACCESS["Kitchen Staff Can:"]
        SA1["View incoming orders"]
        SA2["Mark items as in-progress/ready"]
    end

    subgraph CUST_ACCESS["Customer Can:"]
        CUA1["Browse menu and place orders"]
        CUA2["Track own order status"]
        CUA3["View own order history"]
        CUA4["Rate and review orders"]
    end

    CEO --> CA1 & CA2 & CA3 & CA4 & CA5 & CA6 & CA7
    MGR --> MA1 & MA2 & MA3 & MA4 & MA5
    STAFF --> SA1 & SA2
    CUST --> CUA1 & CUA2 & CUA3 & CUA4

    CEO -.->|"Can also do everything<br/>a Manager can do"| MGR
    MGR -.->|"Can also do everything<br/>Staff can do"| STAFF

    style CEO fill:#d63031,color:#fff
    style MGR fill:#0984e3,color:#fff
    style STAFF fill:#00b894,color:#fff
    style CUST fill:#e17055,color:#fff
```

---

## 5. BRANCH ROUTING — How Orders Find the Right Branch

```mermaid
flowchart TD
    ORDER["🛒 Customer Places Order"] --> DETECT{"📍 Branch Selection"}

    DETECT -->|"Auto-Detect<br/>(GPS Location)"| NEAREST["Find Nearest Open Branch"]
    DETECT -->|"Manual Selection"| CHOOSE["Customer Picks Branch"]

    NEAREST --> CHECK{"Is Branch<br/>Currently Open?"}
    CHOOSE --> CHECK

    CHECK -->|"✅ Yes"| ROUTE["Route Order to Branch"]
    CHECK -->|"❌ No"| FALLBACK["Suggest Nearest Open Branch"]
    FALLBACK --> ROUTE

    ROUTE --> NOTIFY["🔔 Notify Branch Manager"]
    NOTIFY --> ACCEPT{"Manager Accepts<br/>Order?"}

    ACCEPT -->|"✅ Accepted"| PREP["🍳 Begin Preparation"]
    ACCEPT -->|"⏱️ No response<br/>in 3 min"| ESCALATE["🚨 Alert CEO + Notify Customer"]

    PREP --> READY["✅ Food Ready"]
    READY --> FULFILL{"Pickup or<br/>Delivery?"}

    FULFILL -->|"🚗 Pickup"| PICKUP["Customer Notified:<br/>'Your order is ready for pickup!'"]
    FULFILL -->|"🏍️ Delivery"| DISPATCH["WhatsApp Rider:<br/>Order details + Address"]

    DISPATCH --> DELIVERED["✅ Delivered"]
    PICKUP --> COLLECTED["✅ Collected"]

    style ORDER fill:#e17055,color:#fff
    style ROUTE fill:#0984e3,color:#fff
    style PREP fill:#00b894,color:#fff
    style ESCALATE fill:#d63031,color:#fff
    style DELIVERED fill:#6c5ce7,color:#fff
    style COLLECTED fill:#6c5ce7,color:#fff
```

---

## 6. DELIVERY INTEGRATION — WhatsApp-Powered Dispatch

How the system automatically coordinates with the delivery partner — zero manual effort.

```mermaid
sequenceDiagram
    participant OMS as ⚙️ Order System
    participant WA as 📱 WhatsApp API
    participant RIDER as 🏍️ Delivery Rider
    participant CUST as 🍗 Customer
    participant BM as 📋 Branch Manager

    Note over OMS: Customer selects "Delivery"<br/>and order is confirmed

    OMS->>WA: Trigger delivery notification
    WA->>RIDER: 📱 WhatsApp Message:<br/>"🍗 NEW DELIVERY ORDER<br/>━━━━━━━━━━━━━<br/>Order: #CC-0847<br/>Branch: Effio-Ette (Branch 1)<br/>━━━━━━━━━━━━━<br/>Items:<br/>• 2x Crispy Chicken<br/>• 1x Shawarma (Large)<br/>• 1x Coca-Cola<br/>━━━━━━━━━━━━━<br/>Deliver to: 14 Ikot Eyo Street,<br/>off Murtala Mohammed Hwy<br/>Customer: Ada — 081X XXX XXXX<br/>Payment: PAID ✅<br/>━━━━━━━━━━━━━<br/>Please confirm pickup."

    RIDER->>WA: Replies "Confirmed"
    WA->>OMS: Rider confirmed
    OMS->>CUST: "A rider has been assigned! 🏍️"

    Note over BM: Food is ready

    BM->>OMS: Mark "Ready for Pickup"
    OMS->>WA: Notify rider
    WA->>RIDER: "Food is ready! Please head to Branch 1."

    RIDER->>OMS: Picked up
    OMS->>CUST: "Your food is on the way! 🏍️"

    RIDER->>OMS: Delivered
    OMS->>CUST: "Your order has been delivered! ✅<br/>Enjoy your meal! Rate your experience."
```

---

## 7. TECHNOLOGY STACK — What Powers the System

```mermaid
graph LR
    subgraph FRONTEND["🖥️ FRONTEND"]
        NEXTJS["⚛️ Next.js 15<br/>React Framework"]
        PWA_TECH["📱 PWA<br/>Installable Web App"]
        CHARTS["📊 Recharts<br/>Dashboard Visualizations"]
    end

    subgraph BACKEND_TECH["⚙️ BACKEND"]
        API_ROUTES["🔌 Next.js API Routes<br/>Server Actions"]
        PRISMA["🔧 Prisma ORM<br/>Type-Safe DB Access"]
        NEXTAUTH["🔐 NextAuth.js<br/>Authentication"]
        CRON["⏰ Cron Jobs<br/>Scheduled Reports"]
    end

    subgraph INFRA["☁️ INFRASTRUCTURE"]
        VERCEL["▲ Vercel<br/>Hosting + Edge Functions"]
        CRDB_TECH["🪳 CockroachDB<br/>Distributed SQL Database"]
        CF_R2["☁️ Cloudflare R2<br/>Image + File Storage"]
        WA_API["📱 WhatsApp<br/>Business API"]
    end

    NEXTJS --> API_ROUTES
    PWA_TECH --> NEXTJS
    CHARTS --> NEXTJS

    API_ROUTES --> PRISMA
    API_ROUTES --> NEXTAUTH
    API_ROUTES --> CRON

    PRISMA --> CRDB_TECH
    API_ROUTES --> CF_R2
    API_ROUTES --> WA_API
    NEXTJS --> VERCEL

    style FRONTEND fill:#0984e3,color:#fff
    style BACKEND_TECH fill:#6c5ce7,color:#fff
    style INFRA fill:#00b894,color:#fff
```

---

## 8. DATA MODEL — What Information is Stored

```mermaid
erDiagram
    BRANCH ||--o{ ORDER : receives
    BRANCH ||--o{ STAFF : employs
    BRANCH ||--o{ MENU_ITEM : offers
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--o{ ORDER_ITEM : contains
    ORDER ||--o| DELIVERY : has
    ORDER ||--o| RATING : receives
    MENU_ITEM ||--o{ ORDER_ITEM : "ordered as"
    CATEGORY ||--o{ MENU_ITEM : groups
    STAFF ||--o{ ORDER : manages

    BRANCH {
        string id PK
        string name
        string address
        string phone
        boolean is_active
        string operating_hours
    }

    CUSTOMER {
        string id PK
        string name
        string phone
        string email
        string address
        int total_orders
        datetime last_order
    }

    ORDER {
        string id PK
        string branch_id FK
        string customer_id FK
        string staff_id FK
        string status
        decimal total
        string payment_method
        string payment_status
        string fulfillment_type
        datetime created_at
        datetime completed_at
    }

    ORDER_ITEM {
        string id PK
        string order_id FK
        string menu_item_id FK
        int quantity
        decimal unit_price
        string notes
    }

    MENU_ITEM {
        string id PK
        string branch_id FK
        string category_id FK
        string name
        decimal price
        string image_url
        boolean available
        string description
    }

    DELIVERY {
        string id PK
        string order_id FK
        string rider_name
        string rider_phone
        string delivery_address
        string status
        datetime dispatched_at
        datetime delivered_at
    }

    RATING {
        string id PK
        string order_id FK
        int stars
        string comment
        datetime created_at
    }

    CATEGORY {
        string id PK
        string name
        int sort_order
    }

    STAFF {
        string id PK
        string branch_id FK
        string name
        string role
        string email
        string phone
        boolean is_active
    }
```

---

## SUMMARY — The System at a Glance

| Component | Purpose | Access |
|-----------|---------|--------|
| **Customer PWA** | Browse, order, pay, track, rate | Anyone with a phone |
| **Branch Manager Portal** | Receive orders, manage prep, view reports | Branch-level staff |
| **CEO Dashboard** | Monitor all branches, control menu, manage staff | CEO only |
| **WhatsApp Integration** | Auto-notify delivery riders with order details | Delivery partners |
| **CockroachDB** | Store all orders, customers, menus, ratings | System backend |
| **Cloudflare R2** | Serve menu images fast across all devices | System backend |

> **The CEO doesn't need to lift a finger on order fulfillment.** Orders flow automatically from customer → branch → kitchen → delivery → completion. The dashboard simply shows you everything, in real-time, so you can focus on strategy and growth.
