# structure-api-nestjs/

│
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── dto/
│   │   │       └── login.dto.ts
│   │   │
│   │   ├── user/
│   │   │   ├── user.module.ts
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   └── entities/user.entity.ts
│   │   │
│   │   ├── health/
│   │   │   ├── health.module.ts
│   │   │   ├── health.controller.ts
│   │   │   ├── health.service.ts
│   │   │   └── dto/submit-health.dto.ts
│   │   │
│   │   ├── fl-orchestrator/
│   │       ├── fl.module.ts
│   │       ├── fl.controller.ts
│   │       ├── fl.service.ts
│   │       └── dto/
│   │           ├── request-train.dto.ts
│   │           └── aggregate.dto.ts
│
├── config/
│   ├── app.config.ts
│   ├── database.config.ts
│   └── jwt.config.ts
│
├── shared/
│   ├── dto/
│   └── utils/
│
├── .env
├── package.json
└── tsconfig.json
