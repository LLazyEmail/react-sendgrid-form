import { useRouter } from 'next/router';
// Components
import BaaCreditsFinished from '../../components/Forms/BaaCreditsFinished';
import BrandsAsAuthorCredits from '../../components/Forms/BrandsAsAuthorCredits';
import BrandsAsAuthorStory from '../../components/Forms/BrandsAsAuthorStory';
import GotFlaggedAsBaa from '../../components/Forms/GotFlaggedAsBaa';
import Old2019 from '../../components/Forms/Old2019';
import PromotionalStoryDetected from '../../components/Forms/PromotionalStoryDetected';

const Forms = () => {
    const router = useRouter();
    const { forms } = router.query;
    console.log(forms);

    return (
        <>
            {(() => {
                switch (forms) {
                    case 'old-2019':
                        return <Old2019 />;
                    case 'credits-finished':
                        return <BaaCreditsFinished />;
                    case 'got-flagged':
                        return <GotFlaggedAsBaa />;
                    case 'promo-story':
                        return <PromotionalStoryDetected />;
                    case 'credits-purchased':
                        return <BrandsAsAuthorCredits />;
                    case 'story-submitted':
                        return <BrandsAsAuthorStory />;
                    default:
                        return null;
                }
      })()}
        </>
    )
}

export default Forms;
