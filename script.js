// Interactive Logic for Roney Hossain AI/ML Portfolio

// 1. Dynamic Typing Effect in Hero Section
const roles = [
  "An AI & ML Engineer",
  "An MLOps & LLMOps Practitioner",
  "A Deep Learning & NLP Researcher",
  "Problem Solver"
];

let roleIndex = 0;
const typingElement = document.getElementById("typing-text");

if (typingElement) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    typingElement.textContent = roles[roleIndex];
  }, 2600);
}

// 2. Mobile Navbar Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// 3. Project Category Filtering (All / MLOps / LLMOps & NLP / ML & DL)
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => {
    if (btn.getAttribute("data-filter") === category) {
      btn.classList.add("active-filter");
    } else {
      btn.classList.remove("active-filter");
    }
  });

  cards.forEach((card) => {
    const cardCategories = card.getAttribute("data-category");
    if (category === "all" || cardCategories.includes(category)) {
      card.classList.remove("hidden");
      card.classList.add("flex");
    } else {
      card.classList.add("hidden");
      card.classList.remove("flex");
    }
  });
}

// 4. Interactive Project Landing Page Modal Data
const projectData = {
  mlops: {
    badge: "MLOps & Production Engineering",
    title: "End-to-End Automated MLOps Prediction Pipeline",
    desc: "A production-grade machine learning system designed to automate data validation, dataset versioning, experiment tracking, model registry management, and containerized REST API serving.",
    m1Val: "99.2%", m1Lbl: "Pipeline Reliability",
    m2Val: "28ms", m2Lbl: "FastAPI Latency",
    m3Val: "MLflow + DVC", m3Lbl: "Tracking & Versioning",
    steps: [
      "Automated data ingestion, preprocessing, and dataset version control using DVC.",
      "Hyperparameter tuning and model registry tracking powered by MLflow.",
      "Containerized inference service built with FastAPI and multi-stage Dockerfiles.",
      "Continuous Integration and Continuous Deployment (CI/CD) via GitHub Actions."
    ]
  },
  llmops: {
    badge: "LLMOps & Generative AI",
    title: "Enterprise RAG Assistant & LLMOps System",
    desc: "A domain-specific Retrieval-Augmented Generation (RAG) system that enables grounded question-answering over custom knowledge bases while monitoring latency and minimizing hallucinations.",
    m1Val: "94.2%", m1Lbl: "Answer Faithfulness",
    m2Val: "0.89+", m2Lbl: "Retrieval Similarity",
    m3Val: "LangChain", m3Lbl: "LLM Orchestration",
    steps: [
      "Recursive document chunking and semantic embedding generation via Hugging Face.",
      "High-speed vector indexing and similarity search using ChromaDB / FAISS.",
      "Context-grounded prompt engineering with open-source Large Language Models.",
      "Interactive Streamlit web dashboard with source citations and prompt evaluation."
    ]
  },
  mlresearch: {
    badge: "Machine Learning & Tabular Research",
    title: "Imbalanced Classification & Calibrated Ensemble Pipeline",
    desc: "An empirical machine learning framework addressing severe class imbalance and confidence calibration across medical and financial datasets using hybrid gradient boosted ensembles.",
    m1Val: "0.964", m1Lbl: "ROC-AUC Score",
    m2Val: "0.018", m2Lbl: "Calibration Error (ECE)",
    m3Val: "10-Fold CV", m3Lbl: "Stratified Validation",
    steps: [
      "Feature scaling, outlier removal, and metaheuristic feature selection.",
      "Hybrid ensemble combining Random Forest, XGBoost, and LightGBM classifiers.",
      "Rigorous evaluation using 10-Fold Stratified Cross-Validation and F1/PR-AUC metrics.",
      "Post-hoc probability calibration to ensure reliable confidence scores under shift."
    ]
  },
  dl_nlp: {
    badge: "Deep Learning & Natural Language Processing",
    title: "Transformer Fine-Tuning for Multi-Class Text Classification",
    desc: "End-to-end fine-tuning of pretrained Transformer neural networks in PyTorch to classify complex sentiment and user intent with high accuracy.",
    m1Val: "93.1%", m1Lbl: "Macro F1-Score",
    m2Val: "RoBERTa", m2Lbl: "Transformer Backbone",
    m3Val: "Gradio UI", m3Lbl: "Live Web Demo",
    steps: [
      "Custom tokenization, dynamic padding, and attention mask creation with Hugging Face.",
      "Fine-tuning in PyTorch using AdamW optimizer and linear learning-rate warmup.",
      "Evaluation across confusion matrices, precision, recall, and macro F1-score.",
      "Real-time interactive web application deployed using Gradio."
    ]
  }
};

function openProjectModal(key) {
  const data = projectData[key];
  if (!data) return;

  document.getElementById("modal-badge").textContent = data.badge;
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-desc").textContent = data.desc;
  document.getElementById("modal-m1-val").textContent = data.m1Val;
  document.getElementById("modal-m1-lbl").textContent = data.m1Lbl;
  document.getElementById("modal-m2-val").textContent = data.m2Val;
  document.getElementById("modal-m2-lbl").textContent = data.m2Lbl;
  document.getElementById("modal-m3-val").textContent = data.m3Val;
  document.getElementById("modal-m3-lbl").textContent = data.m3Lbl;

  const stepsList = document.getElementById("modal-steps");
  stepsList.innerHTML = data.steps.map((step) => `<li>${step}</li>`).join("");

  const modal = document.getElementById("project-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// 5. Contact Form Submission Handler
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formFeedback.classList.remove("hidden");
    contactForm.reset();
    setTimeout(() => {
      formFeedback.classList.add("hidden");
    }, 4000);
  });
}