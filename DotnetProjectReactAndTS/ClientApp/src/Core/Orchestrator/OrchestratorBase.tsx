

export interface INotify {
    Notify: void;
}

export interface IOrchestratorBase {

}

export class OrchestratorBase<T> {
    private Orchestrators: T[] = [];
}

export class Services {
    
    public async fetchData(input: any, methodName: string, api: string) {

        const response = await fetch(api,
            {
                method: methodName, // or 'PUT', or even 'DELETE' if your backend expects a body
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(input), // 👈 serialization here
            });

        if (!response.ok) {

            throw new Error("Failed to fetch Data");
        }

        const jsonResponse = response.json(); 

        return jsonResponse;
    }
}