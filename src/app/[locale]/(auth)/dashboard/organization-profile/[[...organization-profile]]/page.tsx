import { OrganizationProfile } from '@clerk/nextjs';
import { useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';

import { TitleBar } from '@/features/dashboard/TitleBar';
import { getI18nPath } from '@/utils/Helpers';

const TitleBarWrapper = () => {
  const t = useTranslations('OrganizationProfile');

  return (
    <TitleBar
      title={t('title_bar')}
      description={t('title_bar_description')}
    />
  );
};
const OrganizationProfilePage = async () => {
  const locale = await getLocale();

  return (
    <>
      <TitleBarWrapper />
      <OrganizationProfile
        routing="path"
        path={getI18nPath('/dashboard/organization-profile', locale)}
        afterLeaveOrganizationUrl="/onboarding/organization-selection"
        appearance={{
          elements: {
            rootBox: 'w-full',
            cardBox: 'w-full flex',
          },
        }}
      />
    </>
  );
};

export default OrganizationProfilePage;
