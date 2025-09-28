import useLanguage from '@/locale/useLanguage';
import ReadPaymentModule from '@/modules/PaymentModule/ReadPaymentModule';

export default function PaymentRead() {
  const translate = useLanguage();

  const entity = 'payment';

  const Labels = {
    PANEL_TITLE: translate('Deals'),
    DATATABLE_TITLE: translate('Deals_list'),
    ADD_NEW_ENTITY: translate('add_new_Deals'),
    ENTITY_NAME: translate('Deals'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <ReadPaymentModule config={configPage} />;
}
