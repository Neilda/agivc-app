"use client"

import { useState } from "react"

export function DirectoryFilters() {
  const [stage, setStage] = useState("all")

  const founders = [
    { name: "Sarah Chen", company: "RoboFlow AI", stage: "Series A", domain: "Robotics" },
    { name: "Marcus Johnson", company: "Catalyst Robotics", stage: "Seed", domain: "Robotics" },
    { name: "Priya Gupta", company: "NeuralSync", stage: "Pre-seed", domain: "AI/ML" },
    { name: "David Lee", company: "AIToolKit", stage: "Series A", domain: "AI/ML" },
  ]

  const filteredFounders = stage === "all" ? founders : founders.filter((f) => f.stage === stage)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Browse Founders</h2>

        <div className="mb-8 flex gap-4 flex-wrap">
          <button
            onClick={() => setStage("all")}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              stage === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-foreground border border-border hover:bg-background/80"
            }`}
          >
            All Stages
          </button>
          {["Pre-seed", "Seed", "Series A"].map((s) => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                stage === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground border border-border hover:bg-background/80"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filteredFounders.map((founder, index) => (
            <div key={index} className="p-6 bg-background rounded-2xl border border-border hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-foreground mb-1">{founder.company}</h3>
              <p className="text-sm text-foreground font-semibold mb-3">{founder.name}</p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-secondary-50 text-sm text-foreground rounded-full">{founder.stage}</span>
                <span className="px-3 py-1 bg-secondary-50 text-sm text-foreground rounded-full">{founder.domain}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
