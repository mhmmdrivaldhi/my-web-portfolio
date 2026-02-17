import { Layers2, LayoutTemplate, Server, Workflow } from "lucide-react";

type Service = {
    title: string;
    description: string;
}

const services: Service[] = [
    {
        title: "High Converting Landing Pages",
        description: "Conversion-focused landing pages designed to communicate value clearly and turn visitors into customers.",
    },
    {
        title: "Scalable Frontend Applications",
        description: "Modern, responsive, and scalable frontend applications built with performance and maintainability in mind.",
    },
    {
        title: "Secure Backend & Database Systems",
        description: "Robust backend services and secure database systems designed for scalability, performance, and long-term maintainability.",
    },
    {
        title: "API Integration & Automation",
        description: "Clean, well-documented API integrations and workflow automation to connect systems and streamline business processes.",
    },
]

const ServiceSection = () => {
    return (
        <section id="services-section" className="bg-gradient-to-b from-blue-100 to-blue-50 py-10">
            <div className="text-center max-w-3xl mx-auto mb-4 p-4">
                <div>
                    <h2 className="mt-4 text-2xl md:text-3xl font-bold text-primary">
                        End-to-End FullStack Web Development Services
                    </h2>
                </div>

                <p className="mt-2 text-muted-foreground leading-loose">
                    From high-converting landing pages to scalable frontend applications, secure backend systems, and efficient API integration & automation.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mx-auto px-10 py-5 rounded-3xl">
                { services.map((service, index) => (
                    <div key={index} className="relative rounded-2xl bg-gradient-to-b from-blue-100 to-blue-50 backdrop-blur border-2 border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/100 p-10">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                            { index === 0 && <LayoutTemplate size={28} /> }
                            { index === 1 && <Layers2 size={28} /> }
                            { index === 2 && <Server size={28} /> }
                            { index === 3 && <Workflow size={28} /> }
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServiceSection;