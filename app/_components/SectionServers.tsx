"use client";

import { ServerMinecraft, ServerParser } from "@/lib/ServerParser";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SectionServers() {
  const [servers, setServers] = useState<ServerMinecraft[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ServerParser.topServers()
      .then((data) => {
        setServers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const copyToClipboard = (ip: string) => {
    navigator.clipboard
      .writeText(ip)
      .then(() => {
        alert(`IP "${ip}" скопирован!`);
      })
      .catch((err) => {
        console.error("Ошибка копирования:", err);
        alert("Не удалось скопировать IP");
      });
  };

  return (
    <section
      className="
      p-6 rounded-lg mt-[50px] mb-[50px] shadow-2xl max-w-3xl mx-auto
      bg-[#1a0a0e] 
      border-4 border-[#8b0000]  bg-[url('/nether-texture.jpg')] bg-repeat bg-center
        bg-size-[200px_200px] 
      relative overflow-hidden
    ">
      <h2
        className="
        text-5xl font-black text-[#e63e00] text-center mb-8 tracking-widest
        drop-shadow-md shadow-[#660000]
        relative
      ">
        <span
          className="
          bg-clip-text text-transparent
          bg-gradient-to-r from-[#ff4500] to-[#8b0000]
        ">
          NETHER SERVERS
        </span>
      </h2>

      {loading ? (
        <div className="flex flex-col items-center py-12 relative">
          <div className="animate-spin">
            <div
              className="
              w-16 h-16 border-8 border-[#e63e00] border-t-transparent rounded-full
              shadow-[#660000] shadow-md
            "
            />
          </div>
          <p
            className="
            text-[#f0c2c2] mt-4 font-mono text-sm uppercase
            drop-shadow-sm shadow-[#660000]
          ">
            BURNING DATA...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {servers.map((server, index) => (
            <div
              key={index}
              className={`
                bg-[#2d0f0f] rounded-xl p-5 border-4
                ${
                  index % 2 === 0
                    ? "border-[#e63e00] shadow-[#800000]"
                    : "border-[#9c1f00] shadow-[#5a0000]"
                }
                transform hover:scale-[1.02] transition duration-300
                hover:shadow-lg hover:shadow-[#800000]
                relative overflow-hidden
              `}>
              {/* Эффект лавы по краям */}
              <div
                className={`
                absolute -inset-2 opacity-5
                bg-gradient-to-b from-[#ff450000] via-[#ff450030] to-transparent
                rounded-full blur-2xl
              `}
              />

              <div className="flex justify-between items-center mb-4 relative">
                <span
                  className="
                  text-2xl font-bold text-[#ffcccc] tracking-tight
                  drop-shadow-sm shadow-[#660000]
                ">
                  {server.ip}
                </span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => copyToClipboard(server.ip)}
                    className="
                      px-3 py-1 bg-[#8b0000] text-[#ffe0e0] text-xs font-bold
                      rounded-md hover:bg-[#e63e00] hover:text-white
                      transition duration-200 ease-in-out
                      border border-[#ff6b6b] shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 focus:ring-offset-[#2d0f0f]
                    "
                    title="Скопировать IP">
                    COPY
                  </button>
                  <span
                    className={`
                      px-4 py-2 rounded-md text-sm font-bold uppercase
                      ${
                        parseInt(server.playersOnline) > 50
                          ? "bg-[#4e1a00] text-[#f0a500] border border-[#d45500]"
                          : "bg-[#3a0000] text-[#e63e00] border border-[#800000]"
                      }
                      shadow-sm
                    `}>
                    {server.playersOnline} PLAYERS
                  </span>
                </div>
              </div>

              {server.banner && (
                <div className="mb-4 rounded-md overflow-hidden border border-[#550000]">
                  <Image
                    src={server.banner}
                    alt="Server banner"
                    width={250}
                    height={100}
                    className="
                      w-full h-auto object-cover
                      filter brightness-90 contrast-110 saturate-150
                    "
                  />
                </div>
              )}

              <div className="flex items-center space-x-3 text-sm relative">
                <span className="text-[#884444] font-medium">Version:</span>
                <span
                  className={`
                  font-mono px-3 py-1 rounded-md
                  bg-[#330d0d] text-[#ff9999]
                  border border-[#551a1a] shadow-inner
                `}>
                  {server.version}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && servers.length === 0 && (
        <div className="text-center py-10 relative">
          <p
            className="
            text-4xl font-black text-[#8b0000] mb-4
            drop-shadow-md shadow-[#440000]
          ">
            NO SERVERS IN THE NETHER
          </p>
          <p
            className="
            text-lg text-[#cc6666] italic
            drop-shadow-sm shadow-[#440000]
          ">
            The realm is silent...
          </p>
        </div>
      )}
    </section>
  );
}
