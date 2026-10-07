"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

// Rota do próprio site que repassa ao n8n (ver src/app/api/chat/route.ts)
const WEBHOOK_URL = "/api/chat";

export function ChatBot() {
  useEffect(() => {
    const app = createChat({
      webhookUrl: WEBHOOK_URL,
      mode: "window",
      showWelcomeScreen: false,
      loadPreviousSession: true,
      defaultLanguage: "en",
      initialMessages: [
        "Olá! ☕ Bem-vindo ao Café da Vovó.",
        "Posso ajudar com o cardápio, horários ou reservas. Como posso ajudar?",
      ],
      i18n: {
        en: {
          title: "Café da Vovó ☕",
          subtitle: "Tire suas dúvidas com a gente.",
          footer: "",
          getStarted: "Nova conversa",
          inputPlaceholder: "Digite sua mensagem...",
          closeButtonTooltip: "Fechar",
        },
      },
    });

    return () => {
      app.unmount();
    };
  }, []);

  return null;
}
