import { BeanIcon } from "./icons/BeanIcon";
import { FooterReservarLink } from "./reservation/FooterReservarLink";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-areia">
      <BeanIcon className="pointer-events-none absolute -bottom-10 -right-6 h-40 w-64 text-areia/5" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="font-display text-heading-md">Café da Vovó</p>
          <p className="mt-3 max-w-xs text-body-sm text-areia/70">
            Café especial, doces frescos e lanches leves numa cafeteria de
            bairro em Cornélio Procópio.
          </p>
        </div>

        <div>
          <p className="text-label text-areia/90">Navegação</p>
          <ul className="mt-3 flex flex-col gap-2 text-body-sm text-areia/70">
            <li><a href="/cardapio" className="hover:text-areia">Cardápio</a></li>
            <li><a href="/sobre" className="hover:text-areia">Sobre nós</a></li>
            <li><a href="/#como-funciona" className="hover:text-areia">Como funciona</a></li>
            <li><FooterReservarLink /></li>
          </ul>
        </div>

        <div>
          <p className="text-label text-areia/90">Endereço e horário</p>
          <p className="mt-3 text-body-sm text-areia/70">
            Centro, Cornélio Procópio — PR
            <br />
            Terça a domingo, 7h às 19h
          </p>
          <div className="mt-3 flex gap-4 text-body-sm text-areia/70">
            <a href="https://instagram.com" className="hover:text-areia">Instagram</a>
            <a href="https://wa.me" className="hover:text-areia">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
