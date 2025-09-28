import useLanguage from '@/locale/useLanguage';
import UpdatePaymentModule from '@/modules/PaymentModule/UpdatePaymentModule';

export default function PaymentUpdate() {
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
  return <UpdatePaymentModule config={configPage} />;
}
