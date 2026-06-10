"use client";
import ServicePage from "@/components/ServicePage";
export default function Page() {
  return <ServicePage title="Shipping" arabicTitle="الشحن" icon="🚢"
    description="We coordinate reliable, cost-effective shipping solutions across sea, air, and land routes. Our network of trusted carriers ensures your cargo arrives safely and on time, with full tracking visibility throughout the journey."
    features={["Sea freight (FCL & LCL)","Air freight services","Land transport coordination","Cargo tracking & monitoring","Temperature-controlled shipping","Bulk & project cargo"]} />;
}
