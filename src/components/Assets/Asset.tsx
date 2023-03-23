import { Asset as AssetType, Unit } from "../../types";
import { Descriptions, Link } from "../Library";
import Page from "../Page/Page";

export default function Asset(props: {
  asset: AssetType | undefined;
  assetId: number | string | undefined;
  unit: Unit | undefined;
}) {
  const { asset, unit } = props;

  const lastUptimeAt = new Date(asset?.metrics?.lastUptimeAt ?? "");
  const formattedLastUptimeAt = `${lastUptimeAt.getDate()}/${
    lastUptimeAt.getMonth() + 1
  }/${lastUptimeAt.getFullYear()}`;

  return (
    <Page title="Ativo">
      <Descriptions title={asset?.name} layout="vertical" bordered size="small">
        <Descriptions.Item label="Imagem" span={12}>
          <img src={asset?.image} width="600px" />
        </Descriptions.Item>
        <Descriptions.Item label="Score de Saúde">
          {asset?.healthscore}
        </Descriptions.Item>
        <Descriptions.Item label="Modelo">{asset?.model}</Descriptions.Item>
        <Descriptions.Item label="Unidade">
          <Link to={`/units/${unit?.id}`}>{unit?.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item label="Status">{asset?.status}</Descriptions.Item>
        <Descriptions.Item label="Especificações">
          {asset?.specifications?.maxTemp &&
            `TEMPERATURA MÁXIMA: ${asset?.specifications?.maxTemp}`}
        </Descriptions.Item>
        <Descriptions.Item label="Sensores">
          {asset?.sensors?.join(", ")}
        </Descriptions.Item>
        {asset?.metrics?.lastUptimeAt && (
          <Descriptions.Item label="Data da Ultima Coleta Uptime(Ligada)">
            {formattedLastUptimeAt}
          </Descriptions.Item>
        )}
        {asset?.metrics?.totalCollectsUptime && (
          <Descriptions.Item label="Total de Coletas Uptime(Ligada)">
            {asset?.metrics.totalCollectsUptime}
          </Descriptions.Item>
        )}
        {asset?.metrics?.totalUptime && (
          <Descriptions.Item label="Total de Horas de Coletas Uptime(Ligada)">
            {asset?.metrics.totalUptime}
          </Descriptions.Item>
        )}
        <Descriptions.Item label="Histórico">
          {asset?.healthHistory?.map((history) => {
            const historyTimestamp = new Date(history.timestamp);
            const formattedDate = `${historyTimestamp.getDate()}/${
              historyTimestamp.getMonth() + 1
            }/${historyTimestamp.getFullYear()}`;

            return (
              <div>
                {history.status} em {formattedDate}
                <br />
              </div>
            );
          })}
        </Descriptions.Item>
      </Descriptions>
    </Page>
  );
}
