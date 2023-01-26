import {useIntegrationApp, useIntegrations} from '@integration-app/react'


function IntegrationsList() {

    const integrationApp = useIntegrationApp()

    const {
        items: integrations,
        refresh: refreshIntegrations
    } = useIntegrations()

    return (
        <table className="integrationsList">
            <tbody>
            {integrations.map((integration) => (
                <tr key={integration.key}>
                    <td><img src={integration.logoUri}/></td>
                    <td>{integration.name}</td>
                    <td>{integration.connection ? (
                        <button onClick={async () => {
                            await integrationApp.integration(integration.key).disconnect();
                            refreshIntegrations()
                        }}>Disconnect
                        </button>
                    ) : (
                        <button onClick={async () => {
                            await integrationApp.integration(integration.key).connect();
                            refreshIntegrations()
                        }}>Connect
                        </button>
                    )}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default IntegrationsList;
