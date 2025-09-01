import { Truck, CircleDollarSign, MessageSquare, CreditCard } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Define the type for a single feature item
type Feature = {
    Icon: LucideIcon;
    title: string;
    description: string;
};

// Array containing the data for your feature items
const features: Feature[] = [
    {
        Icon: Truck,
        title: 'Free Shipping & Return',
        description: 'Free shipping on all US orders',
    },
    {
        Icon: CircleDollarSign,
        title: 'Money Guarantee',
        description: 'We support you online 24/7',
    },
    {
        Icon: MessageSquare,
        title: 'Online Support',
        description: 'We support you online 24/7',
    },
    {
        Icon: CreditCard,
        title: 'Secure Payments',
        description: 'Payments are secured & trusted',
    },
];

export default function FeatureSection() {
    return (
        <section className="bg-white py-6 mx-auto">
            <div className="container mx-auto px-4">
                {/* Grid container for responsiveness */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <feature.Icon className="h-10 w-10 flex-shrink-0 text-gray-700" strokeWidth={1.5} />
                            <div>
                                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}