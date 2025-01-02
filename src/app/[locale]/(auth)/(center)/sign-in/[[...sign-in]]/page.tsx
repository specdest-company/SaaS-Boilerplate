import { SignIn } from '@clerk/nextjs';
import { getLocale, getTranslations } from 'next-intl/server';

import { getI18nPath } from '@/utils/Helpers';

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = async () => {
  const locale = await getLocale();
  return (
    <SignIn path={getI18nPath('/sign-in', locale)} />
  );
};

export default SignInPage;
