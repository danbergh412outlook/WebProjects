class StringUtil
{
    static contains(container, contained){
        container = container || "";
        contained = contained || "";

        
        if (!contained.length){
            return true;
        }
        else if (!container.length){
            return false;
        }

        return container.toLowerCase().includes(contained.toLowerCase());
    }
}