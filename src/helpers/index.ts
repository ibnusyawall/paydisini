import { createHash } from 'crypto'

const Helpers = {
    /**
     * Generate Signature with md5 hash
     * @param {string} str create data to hash md5
     * @returns {string}
     */
    generateSignature(str: string): string {
        let signature = createHash('md5').update(str).digest('hex');
        return signature;
    }
}

export default Helpers