// src/components/Integrations.tsx
import React from "react";

const integrations = [
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Zendesk", domain: "zendesk.com" },
  { name: "Zoho", domain: "zoho.com" },
  { name: "Freshdesk", domain: "freshdesk.com" },
  { name: "Dialpad", domain: "dialpad.com" },
  { name: "Five9", domain: "five9.com" },
  { name: "Genesys", domain: "genesys.com" },
  { name: "Talkdesk", domain: "talkdesk.com" },
  { name: "NICE", domain: "nice.com" },
  { name: "Nextiva", domain: "nextiva.com" },
  { name: "RingCentral", domain: "ringcentral.com" },
  { name: "Vtiger", domain: "vtiger.com" },
  { name: "Agile CRM", domain: "agilecrm.com" },
  { name: "Bitrix24", domain: "bitrix24.com" },
];

export function Integrations() {
  const logoImage =
    "https://ik.imagekit.io/r6ei9doug/icon.png?updatedAt=1761460511561";

  return (
    <section className="py-20 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-8">
            <img
              src={logoImage}
              alt="Emotivis Logo"
              className="w-14 h-14 md:w-16 md:h-16"
            />
            <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl leading-tight">
              Trusted Integration Partners
            </h2>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="w-full h-20 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
              >
                <div className="relative w-28 h-16 md:w-32 md:h-18 flex items-center justify-center bg-white/5 rounded-lg p-3 border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/10">
                  <img
                    src={`https://logo.clearbit.com/${integration.domain}`}
                    alt={`${integration.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<span class='text-cyan-400 text-sm'>${integration.name}</span>`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

