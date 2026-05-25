import { MessageCircle } from "lucide-react";
import { contact } from "../data/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/40 transition hover:scale-110"
    >
      <MessageCircle size={30} />
    </a>
  );
}
