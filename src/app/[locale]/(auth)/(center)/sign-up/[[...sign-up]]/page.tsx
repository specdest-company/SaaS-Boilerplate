import { SignUp } from '@clerk/nextjs';
import { getLocale, getTranslations } from 'next-intl/server';

import { getI18nPath } from '@/utils/Helpers';

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignUpPage = async () => {
  const locale = await getLocale();
  return (
    <SignUp path={getI18nPath('/sign-up', locale)} />
  );
};

export default SignUpPage;
