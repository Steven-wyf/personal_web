const experience = {
  zh: {
    heading: {
      kicker: 'Experience',
      title: '在大型企业与初创团队之间穿梭的工程实践',
      description:
        '覆盖推荐系统、RAG 框架与云原生数据库的端到端交付，从底层性能优化到自动化运维都亲手把控。'
    },
    items: [
      {
        id: 'exp-uswoo-se',
        role: 'Software Engineer',
        company: 'USWOO Realty LLC',
        timeframe: '2025.05 — 2025.09',
        location: '纽约 · 远程',
        highlights: [
          '设计并部署基于 FastAPI 的推理系统（BERT→矩阵分解→MLP→LLaRA），结合 Docker、Kubernetes 与 MLflow，实现低于 200 毫秒的实时音乐推荐。',
          '使用 Terraform、ArgoCD 与 GitHub Actions 构建端到端 MLOps 流水线，自动化模型再训练、金丝雀发布与实验追踪，覆盖预发与生产环境。',
          '通过 ONNX 量化与 Prometheus/Grafana 监控优化模型服务，使吞吐提升 45%，同时保持可观测性与可扩展性。'
        ]
      },
      {
        id: 'exp-uswoo-intern',
        role: 'Software Engineer Intern',
        company: 'USWOO Realty LLC',
        timeframe: '2024.10 — 2025.04',
        location: '纽约 · 远程',
        highlights: [
          '主导 Cache-Augmented Generation（CAG）项目，以 KV-cache 优化替换传统 RAG 检索，使 LLM 响应时延降低 40%，并提升吞吐与内存效率。',
          '以模块化 Python 架构构建可配置的模型服务、评估与缓存管道，结合 Docker、命令行工具与动态环境加载，支持快速扩展。',
          '搭建自动化基准测试流程，评估多数据集（SQuAD、HotpotQA）下的准确率与时延权衡，并在 CPU/GPU 集群上部署分布式测试环境。'
        ]
      },
      {
        id: 'exp-huawei',
        role: 'Sr. Software Development Engineer',
        company: 'Huawei Cloud Computing Technology Co. Ltd.',
        timeframe: '2024.01 — 2025.05',
        location: '上海',
        highlights: [
          '牵头云可扩展非关系型数据库的设计、优化与交付，基于 MongoDB 与 RocksDB 构建路由层与 LSM-tree 聚合策略，在高并发下实现 100k+ 文档/秒吞吐与毫秒级时延。',
          '实现跨网关、转发与存储层的原子批量事务，并统一 RESTful / SDK 接口，支持多人交易与大规模薪酬等企业场景；通过 Kubernetes、Jenkins、Docker、Prometheus 等打造 DevOps 流水线，将增量发布效率提升 60%。',
          '主导 KVS 服务智能性能监控平台，将 FTDS 指标埋点进 C++ 核心模块，并构建 Python + Prometheus + Grafana 的可视化与压测框架，性能分析效率提升 95%，P99 延迟降低 90%。',
          '设计分布式存储灾备工具，基于 REPL/GFlag 提供交互式接口，开发 WAL 日志解码与恢复引擎，定位比特级数据损坏并重建 LSM-tree 状态，同时编写多场景恢复手册提升演练成功率。',
          '在 AWS S3 之上交付自动回收、重复检测与快照等特性，引入 Try-Confirm-Cancel 去重框架与指数退避重试逻辑，保障大规模环境下的数据一致性与容灾能力。'
        ]
      }
    ]
  },
  en: {
    heading: {
      kicker: 'Experience',
      title: 'Engineering impact across enterprises and startups',
      description:
        'Shipped recommendation systems, RAG frameworks, and cloud-native databases end to end—owning everything from low-level tuning to automated operations.'
    },
    items: [
      {
        id: 'exp-uswoo-se',
        role: 'Software Engineer',
        company: 'USWOO Realty LLC',
        timeframe: 'May 2025 — Sep 2025',
        location: 'New York · Remote',
        highlights: [
          'Designed and deployed a FastAPI-based inference system (BERT → Matrix Factorization → MLP → LLaRA) with Docker, Kubernetes, and MLflow, achieving sub-200 ms real-time music recommendations.',
          'Built end-to-end MLOps pipelines with Terraform, ArgoCD, and GitHub Actions to automate retraining, canary releases, and experiment tracking across staging and production.',
          'Optimized model serving via ONNX quantization and Prometheus-Grafana monitoring, improving throughput by 45% while keeping deployments observable and scalable.'
        ]
      },
      {
        id: 'exp-uswoo-intern',
        role: 'Software Engineer Intern',
        company: 'USWOO Realty LLC',
        timeframe: 'Oct 2024 — Apr 2025',
        location: 'New York · Remote',
        highlights: [
          'Engineered a high-performance inference framework replacing RAG retrieval with KV-cache optimization, reducing LLM response latency by 40% while improving throughput and memory efficiency.',
          'Designed a modular Python architecture with configurable pipelines for model serving, evaluation, and caching, integrating Docker, argparse CLI, and dynamic environment loading.',
          'Built automated benchmarking workflows to evaluate accuracy/latency trade-offs across datasets (SQuAD, HotpotQA) and deployed distributed testing environments on CPU/GPU clusters.'
        ]
      },
      {
        id: 'exp-huawei',
        role: 'Sr. Software Development Engineer',
        company: 'Huawei Cloud Computing Technology Co. Ltd.',
        timeframe: 'Jan 2024 — May 2025',
        location: 'Shanghai, China',
        highlights: [
          'Project lead for a cloud scalable non-relational database built on MongoDB and RocksDB—implemented C++ routing enhancements and LSM-tree aggregation to achieve 100k+ docs/sec throughput with millisecond latency under high concurrency.',
          'Developed atomic bulk transactions across gateway, forwarding, and storage layers; standardized RESTful and SDK interfaces for enterprise use cases such as multiplayer trading and large-scale payroll, while building a DevOps CI/CD pipeline with Kubernetes, Jenkins, Docker, Prometheus, and automated Python regression tests to boost deployment velocity by 60%.',
          'Led intelligent performance monitoring for the KVS service by embedding FTDS metrics in C++ core modules and creating a Python + Prometheus + Grafana benchmarking suite, increasing analysis efficiency by 95% and cutting 99th percentile latency by 90% under production workloads.',
          'Designed a disaster recovery framework for distributed storage, providing a REPL/GFlag interface, WAL log decoder, and recovery engine to reconstruct LSM-tree states at bit-level precision, accompanied by comprehensive playbooks to improve simulation success rates.',
          'Delivered multiple core features for a distributed file system on AWS S3, including automatic recycling, duplication detection, and snapshot support with TCC-based deduplication and exponential backoff retries to guarantee consistency and resilient recovery.'
        ]
      }
    ]
  }
};

export default experience;
