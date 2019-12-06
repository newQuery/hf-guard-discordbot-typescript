interface DiscordConfig {
    prefix: string;
    token: string;
}

export interface Config
{
    discord: DiscordConfig;
    port: number;
}
