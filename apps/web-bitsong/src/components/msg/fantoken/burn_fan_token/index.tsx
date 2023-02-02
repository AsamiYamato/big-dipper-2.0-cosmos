import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgBurnFanToken from '@/models/msg/fantoken/msg_burn_fan_token';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const BurnFanToken: FC<{ message: MsgBurnFanToken }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgBurnFanToken"
        components={[<Name address={message.sender} name={senderMoniker} />]}
      />
    </Typography>
  );
};

export default BurnFanToken;
