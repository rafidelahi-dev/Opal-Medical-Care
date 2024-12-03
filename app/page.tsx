import { Hero } from '@/components/home/hero';
import { ServiceOptions } from '@/components/home/service-options';
import { WhyDifferent } from '@/components/home/why-different';
import { Reviews } from '@/components/home/reviews';
import { BeforeAfter } from '@/components/home/before-after';
import { FAQ } from '@/components/home/faq';
import { Contact } from '@/components/home/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceOptions />
      <WhyDifferent />
      <Reviews />
      <BeforeAfter />
      <FAQ />
      <Contact />
    </>
  );
}