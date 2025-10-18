const projects = {
  zh: {
    heading: {
      kicker: 'Selected Work',
      title: '代表性的系统级项目',
      description: '选取三类核心成果：冷启动推荐系统、LLM 推理框架与云原生数据库，展示如何在复杂约束下交付可持续的工程能力。'
    },
    items: [
      {
        id: 'llara',
        title: 'LLaRA++ 冷启动音乐推荐系统',
        type: 'Production AI / Recommendation',
        summary:
          '基于 FastAPI 构建的实时推理平台，串联 BERT 特征 → 矩阵分解 → MLP → LLaRA，依托 Docker、Kubernetes 与 MLflow，实现 <200ms 的推荐响应并具备可回溯的实验体系。',
        stack: ['FastAPI', 'BERT', 'Kubernetes', 'MLflow', 'ONNX'],
        links: [
          { label: '查看经历', href: '#experience', external: false }
        ]
      },
      {
        id: 'cag',
        title: 'Cache-Augmented Generation 框架',
        type: 'LLM Infrastructure',
        summary:
          '以 KV-cache 优化替换传统 RAG 检索，构建模块化 Python 服务框架与自动化基准测试流水线，在维持准确率的同时将大模型响应时延降低 40%。',
        stack: ['Python', 'KV-Cache', 'Docker', 'Prometheus', 'GPU Benchmark'],
        links: [
          { label: '技术细节', href: '#experience', external: false }
        ]
      },
      {
        id: 'cloud-db',
        title: '云可扩展非关系型数据库平台',
        type: 'Cloud Native Database',
        summary:
          '在 MongoDB + RocksDB 之上设计路由层与 LSM-tree 聚合策略，构建事务、监控与灾备工具链，支持 100k+ 文档/秒吞吐与毫秒级时延的企业场景。',
        stack: ['C++', 'MongoDB', 'RocksDB', 'Kubernetes', 'Prometheus'],
        links: [
          { label: '产品亮点', href: '#experience', external: false }
        ]
      }
    ]
  },
  en: {
    heading: {
      kicker: 'Selected Work',
      title: 'Representative system-level deliveries',
      description:
        'Three pillars—cold-start recommendation, LLM infrastructure, and cloud-native databases—highlight how I balance performance, reliability, and iteration at scale.'
    },
    items: [
      {
        id: 'llara',
        title: 'LLaRA++ Cold-Start Music Recommendation',
        type: 'Production AI / Recommendation',
        summary:
          'A FastAPI-based inference stack chaining BERT embeddings → Matrix Factorization → MLP → LLaRA. Deployed with Docker, Kubernetes, and MLflow to deliver <200 ms real-time recommendations with traceable experiments.',
        stack: ['FastAPI', 'BERT', 'Kubernetes', 'MLflow', 'ONNX'],
        links: [
          { label: 'View experience', href: '#experience', external: false }
        ]
      },
      {
        id: 'cag',
        title: 'Cache-Augmented Generation Platform',
        type: 'LLM Infrastructure',
        summary:
          'Replaced RAG retrieval with KV-cache optimization, packaged in a modular Python serving framework plus automated benchmarking pipelines—cutting LLM latency by 40% without sacrificing accuracy.',
        stack: ['Python', 'KV-Cache', 'Docker', 'Prometheus', 'GPU Benchmark'],
        links: [
          { label: 'Read details', href: '#experience', external: false }
        ]
      },
      {
        id: 'cloud-db',
        title: 'Cloud-Scalable Non-Relational Database',
        type: 'Cloud Native Database',
        summary:
          'Designed routing layers and LSM-tree aggregation atop MongoDB + RocksDB, adding transactions, observability, and disaster recovery tooling to sustain 100k+ docs/sec throughput with millisecond latency.',
        stack: ['C++', 'MongoDB', 'RocksDB', 'Kubernetes', 'Prometheus'],
        links: [
          { label: 'Explore impact', href: '#experience', external: false }
        ]
      }
    ]
  }
};

export default projects;
