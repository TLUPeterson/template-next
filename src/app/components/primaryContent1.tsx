import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';

export default function PrimaryContent1() {

  return (
    <LandingPrimaryImageCtaSection
      title="Landing page in minutes"
      description="Get 10x more done with Shadcn UI, React & Next.js, and say goodbye to repetitive tasks. You'll never go back."
      imageSrc="/static/images/495x350.png"
      imageAlt="Sample image"
    >
      <Button size="xl" variant='primary' asChild>
        <a href="#">Buy now</a>
      </Button>

      <Button size="xl" variant="outlinePrimary">
        <a href="#">Read more</a>
      </Button>
    </LandingPrimaryImageCtaSection>
  );
}
