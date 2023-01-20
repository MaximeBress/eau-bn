import { PageProps } from 'typings';
import { Header } from 'components/Header';

export const Layout = ({ navigation, settings, children }: PageProps) => {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
    </div>
  );
};
